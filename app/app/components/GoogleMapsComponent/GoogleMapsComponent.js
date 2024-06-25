'use client'
import { useEffect, useRef } from 'react';
import { Loader } from "@googlemaps/js-api-loader"

const center = {
    lat: 42.698334,
    lng: 23.319941
};

const handleCoordinates = (e) => {
    console.log(e);
}

export default function GoogleMapsComponent() {
    const mapsRef = useRef();

    useEffect(() => {
        const initMaps = async () => {
            const loader = new Loader({
                apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
                version: "weekly",
            });

            const { Map } = await loader.importLibrary('maps');
            const { AdvancedMarkerElement  } = await loader.importLibrary('marker');

            const mapOPtions = {
                center,
                zoom: 17,
                mapId: 'NEXT_MAP',
            }

            const map = new Map(mapsRef.current, mapOPtions);

            const marker = new AdvancedMarkerElement ({
                map,
                position: center,
            });
        }

        initMaps();
    }, []);
    return (
        <div className="w-[100%] h-[100%]" ref={mapsRef} />
    );
};
