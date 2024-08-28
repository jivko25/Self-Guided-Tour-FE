import React from 'react';

function CardSphera({ imageUrl, cityName }) {
  return (
    <div className="">
      <img
        src={imageUrl}
        alt={cityName}
        className="w-full h-48 object-cover rounded-full "
      />
      
        <h2 className="">{cityName}</h2>
    
    </div>
  );
}

export default CardSphera;
