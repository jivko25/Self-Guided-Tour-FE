"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    // Set initial width on mount
    handleResize();

    // Add event listener to update width on resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useScreenSize;
