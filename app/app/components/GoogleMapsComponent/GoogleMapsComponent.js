'use client'
import { useEffect, useRef, useState } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import locationmarker from "../../public/svg/locationmarker.svg";
import Image from 'next/image';

const center = { lat: 42.698334, lng: 23.319941 }

export default function GoogleMapsComponent({ handleMapClick, coordinates, coordinatesArray }) {
  const mapsRef = useRef(null);
  const markerRef = useRef(null);
  const infoWindowRef = useRef(null);
  const currentInfoWindowRef = useRef(null);
  const [data, setData] = useState({});

  const handleSave = (data) => {
    handleMapClick(data)
  }

  const handleCancel = (e) => {
    console.log(e);
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
        center,
        zoom: 17,
        mapId: 'NEXT_MAP',
      }

      const map = new Map(mapsRef.current, mapOPtions);

      const handleClick = async (e) => {
        e.stop();
        if (currentInfoWindowRef.current) {
          currentInfoWindowRef.current.close();
        }
        if (e.placeId && handleMapClick) {
          const place = new Place({ id: e?.placeId });
          await place.fetchFields({ fields: ["displayName"] });
          const { latLng } = e;
          const lat = latLng.lat();
          const lng = latLng.lng();

          const location = place.displayName;
          handleSave({ latitude: lat, longitude: lng, location });

          const marker = new AdvancedMarkerElement({
            map,
            position: {lat, lng},
            content: markerRef.current,
          });
  
          const infoWindow = new InfoWindow({
            content: infoWindowRef.current,
            headerDisabled: true,
          });

          currentInfoWindowRef.current = infoWindow;
          infoWindow.open(map, marker);
        }
    
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

    initMaps();
  }, []);


  return (
    <div className="w-[100%] h-[100%]" ref={mapsRef}>
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
            <textarea className="w-[160px] h-[55px] border border-[#CECECE] border-[0.5px] py-[5px] px-[5px] resize-none focus:outline-none rounded-sm text-[#808080]" placeholder='Location name'></textarea>
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
