'use client'
import { useEffect, useRef, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import locationmarker from "../../public/svg/locationmarker.svg";
import Image from 'next/image';

let center = { lat: 42.698334, lng: 23.319941 }

export default function GoogleMapsComponent({ getLocationInfo, coordinates, coordinatesArray, createCoordinates, index, locationId }) {
  const mapsRef = useRef(null);
  const markerRef = useRef(null);
  const infoWindowRef = useRef(null);
  const currentInfoWindowRef = useRef(null);
  const currentMarkerRef = useRef(null);
  const autocompleteRef = useRef(null);
  const inputRef = useRef(null);
  const autocompleteSessionTokenRef = useRef(null);
  const GoogleSessionTokenRef = useRef(null);
  const [data, setData] = useState({});
  let libraries = null;

  const handleSave = () => {
    const textAreaValue = currentInfoWindowRef.current.content.children[0].firstChild.value;

    if (textAreaValue !== data.location) {
      data.location = textAreaValue;
    }
    getLocationInfo(data);
    currentInfoWindowRef.current.close();
  }

  const handleCancel = () => {
    currentInfoWindowRef.current.close();
    currentMarkerRef.current.setMap(null);
  }

  useEffect(() => {
    const initMaps = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      const [{ Map, InfoWindow }, { AdvancedMarkerElement }, { Place, Autocomplete, AutocompleteSessionToken }, { Geocoder }] = await loadLibraries(loader);
      GoogleSessionTokenRef.current = AutocompleteSessionToken;


      if (coordinates && coordinates.lat) {
        center = coordinates;
      } else if (createCoordinates && createCoordinates.length > 0) {
        const lastLocation = createCoordinates[createCoordinates.length - 1]
        center = { lat: lastLocation.latitude, lng: lastLocation.longitude };
      }

      const mapOPtions = {
        center: center,
        zoom: 17,
        mapId: 'NEXT_MAP',
      }

      const map = new Map(mapsRef.current, mapOPtions);

      const handleClick = async (e) => {
        // Stop default behavior
        e.stop();
        const { latLng } = e;
        const lat = latLng.lat();
        const lng = latLng.lng();

        // closing InfoWindows when another location is selected
        if (currentInfoWindowRef.current) {
          currentInfoWindowRef.current.close();
        }

        let placeId = e.placeId || '';

        if (getLocationInfo) {
          let place = '';
          let location = '';

          if (placeId !== '') {
            // Getting locations name and setting the data for the context if location id exists
            place = new Place({ id: e?.placeId });
            await place.fetchFields({ fields: ["displayName"] });
            location = place.displayName;
          } else {
            const geocoding = new Geocoder();
            const { results } = await geocoding.geocode({ location: { lat, lng } });
            placeId = results[0].place_id;
          }

          setData({ placeId: placeId, latitude: lat, longitude: lng, location });

          // Adds marker to the selected location
          const marker = new AdvancedMarkerElement({
            map,
            position: { lat, lng },
            content: markerRef.current,
          });

          // Adding text to the current Info Windows
          infoWindowRef.current.children[0].firstChild.value = location

          // Creating the Info Window instance with the html
          const infoWindow = new InfoWindow({
            content: infoWindowRef.current,
            headerDisabled: true, // disables the default close button
          });

          // Saving reverences to the opened marker and Info Window and add them to the map
          currentInfoWindowRef.current = infoWindow;
          currentMarkerRef.current = marker;
          infoWindow.open(map, marker);

        }

      }

      // showing all selected markers in create page
      if (createCoordinates && createCoordinates.length > 0) {
        createCoordinates.forEach((loc) => {
          const markerContent = createCustomMarker('#575757');
          new AdvancedMarkerElement({
            map,
            position: { lat: loc.latitude, lng: loc.longitude },
            content: markerContent
          });

        });

      }

      // Add market to a specific coordinates
      if (coordinates) {
        new AdvancedMarkerElement({
          map,
          position: coordinates,
          content: markerRef.current
        });
      }

      // Add multiple markers from array of coordinates
      if (coordinatesArray && coordinatesArray.length > 0) {
        coordinatesArray.forEach((coordinates) => {
          const markerContent = createCustomMarker('#E30505');
          new AdvancedMarkerElement({
            map,
            position: coordinates,
            content: markerContent
          });
        });
      }

      // Add marker based on location id
      if (locationId) {
        const place = new Place({ id: locationId });
        await place.fetchFields({ fields: ["location"] });
        const { lat, lng } = place.location;
        const latitude = lat();
        const longitude = lng();

        const newMapOptions = {
          center: { lat: latitude, lng: longitude },
          zoom: 17,
          mapId: "NEXT_MAP",
        }

        // Setting new map options
        map.setOptions(newMapOptions)

        new AdvancedMarkerElement({
          map,
          position: { lat: latitude, lng: longitude },
          content: markerRef.current,
        });
      }

      map.addListener("click", handleClick);

      // Autocomplete logic
      const autocomplete = new Autocomplete(inputRef.current, {
        types: ['geocode'],
      });

      autocompleteRef.current = autocomplete;

      autocomplete.addListener('place_changed', (e) => {
        const place = autocomplete.getPlace();
        if (place.geometry && map) {
          map.panTo(place.geometry.location);
          map.setZoom(14);
        }
        // Reset session token after selection
        inputRef.current.value = '';
        
        autocompleteSessionTokenRef.current = null;
      });

    }

    //initialize map
    initMaps();
  }, [locationId, coordinates, createCoordinates]);

  /**
   * Helper function for loading google api libraries
   * @param {object} loader 
   * @returns 
   */
  async function loadLibraries(loader) {
    if (!libraries) {
      libraries = await Promise.all([
        loader.importLibrary('maps'),
        loader.importLibrary('marker'),
        loader.importLibrary('places'),
        loader.importLibrary('geocoding'),
      ]);
    }

    return libraries;
  }

  // Generate a new session token on input focus
  const handleFocus = async () => {
    if (GoogleSessionTokenRef.current) {
      autocompleteSessionTokenRef.current = new GoogleSessionTokenRef.current(); // Generate session token
      autocompleteRef.current.setOptions({ sessionToken: autocompleteSessionTokenRef.current }); // Set token to Autocomplete
    }
  };

  /**
   * Helper function for creating custom markers
   * @param {string} color 
   * @returns 
   */
  const createCustomMarker = (color) => {
    // Create container element for the marker
    const container = document.createElement('div');
    container.style.width = '40px';
    container.style.height = '40px';
    container.style.position = 'relative';

    // Create SVG element
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('width', '40');
    svg.setAttribute('height', '40');
    svg.setAttribute('viewBox', '0 0 40 40');
    svg.setAttribute('fill', 'none');

    // Create path elements for the SVG
    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M20 17.5C21.3807 17.5 22.5 16.3807 22.5 15C22.5 13.6193 21.3807 12.5 20 12.5C18.6193 12.5 17.5 13.6193 17.5 15C17.5 16.3807 18.6193 17.5 20 17.5Z');
    path1.setAttribute('fill', color);

    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('d', 'M20 2.5C13.1078 2.5 7.5 7.86328 7.5 14.4531C7.5 17.5914 8.93047 21.7648 11.7516 26.8578C14.0172 30.9469 16.6383 34.6445 18.0016 36.4844C18.2319 36.7987 18.5331 37.0544 18.8807 37.2306C19.2284 37.4069 19.6126 37.4987 20.0023 37.4987C20.3921 37.4987 20.7763 37.4069 21.1239 37.2306C21.4716 37.0544 21.7728 36.7987 22.0031 36.4844C23.3641 34.6445 25.9875 30.9469 28.2531 26.8578C31.0695 21.7664 32.5 17.593 32.5 14.4531C32.5 7.86328 26.8922 2.5 20 2.5ZM20 20C19.0111 20 18.0444 19.7068 17.2221 19.1573C16.3999 18.6079 15.759 17.827 15.3806 16.9134C15.0022 15.9998 14.9031 14.9945 15.0961 14.0245C15.289 13.0546 15.7652 12.1637 16.4645 11.4645C17.1637 10.7652 18.0546 10.289 19.0245 10.0961C19.9945 9.90315 20.9998 10.0022 21.9134 10.3806C22.827 10.759 23.6079 11.3999 24.1573 12.2221C24.7068 13.0444 25 14.0111 25 15C24.9986 16.3256 24.4713 17.5966 23.5339 18.5339C22.5966 19.4713 21.3256 19.9986 20 20Z');
    path2.setAttribute('fill', color);

    // Append path elements to the SVG
    svg.appendChild(path1);
    svg.appendChild(path2);

    // Append SVG to container
    container.appendChild(svg);

    return container;
  };


  return (
    <div className='w-[100%] h-[100%] relative'>
      {/* Container for Autocomplete */}
      <div className=' w-[120px] h-[40px] tablet:w-[200px] z-10 absolute left-[5px] phone:left-[182px] bottom-[20px] phone:top-[10px] border shadow'>
        <input
          ref={inputRef}
          className='z-50 w-[100%] h-[100%] p-1'
          type="text"
          placeholder="Search"
          onFocus={handleFocus} // Generate a new session token on focus
        />
      </div>
      <div className="w-[100%] h-[100%]" ref={mapsRef} id={`map-${index}`}>
        {/* Hidden container for marker content */}
        <div style={{ display: "none" }}>
          <div ref={markerRef}>
            <Image
              src={locationmarker}
              alt="Marker Image"
              width={40}
              height={40}
            />
          </div>
        </div>
        {/* Hidden container for InfoWindow content */}
        <div style={{ display: "none" }}>
          <div ref={infoWindowRef} className={"w-[162px] h-[85px]"}>
            <div>
              <textarea className="w-[160px] h-[55px] border border-[#CECECE] border-[0.5px] py-[5px] px-[5px] 
                                resize-none focus:outline-none rounded-sm text-[#13294B]" placeholder='Location name'>
              </textarea>
              <div className='flex justify-around mt-[10px] text-[#4285F4]'>
                <button onClick={handleSave}>Save</button>
                <button onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
