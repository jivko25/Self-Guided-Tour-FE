'use client'
import { useEffect, useRef, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import locationmarker from "../../public/svg/locationmarker.svg";
import Image from 'next/image';

const center = { lat: 42.698334, lng: 23.319941 }

export default function GoogleMapsComponent({ getLocationInfo, coordinates, coordinatesArray, index, locationId }) {
  const mapsRef = useRef(null);
  const markerRef = useRef(null);
  const infoWindowRef = useRef(null);
  const currentInfoWindowRef = useRef(null);
  const currentMarkerRef = useRef(null);
  const [data, setData] = useState({});

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

      const { Map, InfoWindow } = await loader.importLibrary('maps');
      const { AdvancedMarkerElement } = await loader.importLibrary('marker');
      const { Place } = await loader.importLibrary('places');

      const mapOPtions = {
        center: coordinates ? coordinates : center,
        zoom: 17,
        mapId: 'NEXT_MAP',
      }

      const map = new Map(mapsRef.current, mapOPtions);

      const handleClick = async (e) => {
        // Stop default behavior
        e.stop();

        // closing InfoWindows when another location is selected
        if (currentInfoWindowRef.current) {
          currentInfoWindowRef.current.close();
        }

        const placeId = e.placeId;

        if (placeId && getLocationInfo) {
          // Getting locations name and setting the data for the context
          const place = new Place({ id: e?.placeId });
          await place.fetchFields({ fields: ["displayName"] });
          const { latLng } = e;
          const lat = latLng.lat();
          const lng = latLng.lng();

          const location = place.displayName;
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

      // Add market to a specific coordinates
      if (coordinates) {
        const marker = new AdvancedMarkerElement({
          map,
          position: coordinates,
        });
      }

      // Add multiple markers from array of coordinates
      if (coordinatesArray && coordinatesArray.length > 0) {
        coordinatesArray.forEach((coordinates) => {
          const marker = new AdvancedMarkerElement({
            map,
            position: coordinates,
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
          mapId: 'NEXT_MAP',
        }

        // Setting new map options
        map.setOptions(newMapOptions)

        const marker = new AdvancedMarkerElement({
          map,
          position: { lat: latitude, lng: longitude },
          content: markerRef.current,
        });
      }

      map.addListener('click', handleClick);

      if (coordinates) {
        const marker = new AdvancedMarkerElement({
          map,
          position: coordinates,
        });
      }

      if (coordinatesArray && coordinatesArray.length > 0) {
        coordinatesArray.forEach((coordinates) => {
          const marker = new AdvancedMarkerElement({
            map,
            position: coordinates,
          });
        });
      }

    }

    //initialize map
    initMaps();
  }, [locationId]);


  return (
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
                                resize-none focus:outline-none rounded-sm text-[#808080]" placeholder='Location name'>
            </textarea>
            <div className='flex justify-around mt-[10px] text-[#4285F4]'>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
