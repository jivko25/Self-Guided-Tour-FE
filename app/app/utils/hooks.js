"use client"
import { useEffect, useState } from "react";

export function useWindowWidth() {
    const isWIndow = typeof window !== 'undefined';
    const getWidth = () => (isWIndow) ? window.innerWidth : null;
    const [windowWidth, setWindowWidth] = useState(getWidth());

    useEffect(() => {
        if (!isWIndow) {
            return;
        }

        const handleWindowResize = () => {
            setWindowWidth(getWidth());
        }

        window.addEventListener("resize", handleWindowResize);
        handleWindowResize();

        return () => { window.removeEventListener('resize', handleWindowResize); }
    }, []);

    return windowWidth;
}