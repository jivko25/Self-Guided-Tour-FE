'use client'
import { useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader"
import locationmarker from "../../public/svg/locationmarker.svg";
import Image from 'next/image';

const center = {
  lat: 42.698334,
  lng: 23.319941
};

export default function GoogleMapsComponent({ handleMapClick }) {
  const mapsRef = useRef();
  const markerRef = useRef();

  const handleClick = async (Place, e) => {
    if (e.placeId && handleMapClick) {
      const place = new Place({ id: e?.placeId });
      await place.fetchFields({ fields: ["displayName"] });
      const { latLng } = e;
      const lat = latLng.lat();
      const lng = latLng.lng();
      const location = place.displayName;
      handleMapClick({ latitude: lat, longitude: lng, location });
    }

  }

  const handleMarkerClick = (e) => {
    console.log(e);
  }

  useEffect(() => {
    const initMaps = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly",
      });

      const { Map } = await loader.importLibrary('maps');
      const { AdvancedMarkerElement } = await loader.importLibrary('marker');
      const { Place } = await loader.importLibrary('places');

      const mapOPtions = {
        center,
        zoom: 17,
        mapId: 'NEXT_MAP',
      }

      const map = new Map(mapsRef.current, mapOPtions);

      const marker = new AdvancedMarkerElement({
        map,
        position: center,
        content: markerRef.current,
      });

      map.addListener('click', handleClick.bind(null, Place));
      marker.addListener('click', handleMarkerClick);

    }

    initMaps();
  }, []);


  return (
    <div className="w-[100%] h-[100%]" ref={mapsRef}>
      {/* Hidden container for marker content */}
      <div style={{ display: 'none' }}>
        <div ref={markerRef}>
          <Image
            src={locationmarker}
            alt="Marker Image"
            width={50}
            height={50}
          />
        </div>
      </div>
    </div>
  );
};
