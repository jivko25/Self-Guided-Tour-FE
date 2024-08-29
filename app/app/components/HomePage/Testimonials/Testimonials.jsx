"use client";
import React, { useEffect, useState } from 'react'

function Testimonials() {
  const [bulgarianBestPlaces, setBulgarianBestPlaces] = useState([]);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const resBulgarian = await axiosTour.get(
          "?sortBy=mostBought&pageNumber=1&pageSize=4"
        );
        setBulgarianBestPlaces(resBulgarian.data.result.tours);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTours();
  }, []);
  return (
    <div>Testimonials</div>
  )
}

export default Testimonials