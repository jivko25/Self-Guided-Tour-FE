import React, { useState } from "react";
import ImageOutline from "../Svgs/ImageOutline";
import Slider from "../Slider/Slider";

function TourImagesWebTablet({ thumbnailImageUrl, landmarks }) {
  const [openSlider, setOpenSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null); // Добавено състояние за избраната картинка

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl); // Запазване на избраната картинка
    setOpenSlider(true); // Отваряне на слайдера
  };
  return (
    <>
      <div
        className="hidden phone:hidden smallPhone:hidden overflow-hidden
        web:grid web:grid-cols-4 web:grid-rows-2 web:gap-4 web:w-full web:h-full web:max-h-[582px] web:items-center web:justify-center web:rounded-[15px] 
        tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full tablet:items-center tablet:justify-center tablet:rounded-[15px] 
        "
      >
        <img
          className="object-cover w-full h-full overflow-hidden
            web:col-span-2 web:row-span-2 web:h-[500px]  
            tablet:w-full tablet:h-[360px] tablet:col-span-2
     
            "
          src={thumbnailImageUrl}
          onClick={() => handleImageClick(thumbnailImageUrl)}
          alt="Cover Image"
        />
        {landmarks &&
          landmarks
            .flatMap((landmark) =>
              landmark.resources
                ? landmark.resources.filter(
                    (resource) => resource.resourceType === "Image"
                  )
                : []
            )
            .slice(0, 4)
            .map((resource, index) => (
              <div key={resource.resourceId} className="relative">
                <img
                  className="object-cover overflow-hidden
                      web:w-[431px] web:h-[244px]
                      tablet:w-full tablet:h-[280px]
             
                      "
                  src={resource.resourceUrl}
                  alt={`Landmark Image ${index + 1}`}
                  onClick={() => handleImageClick(resource.resourceUrl)}
                />
                {index === 1 && landmarks.length > 2 && (
                  <div className="hidden web:block web:absolute web:right-[20px] web:top-[20px]">
                    <button
                      className="flex h-12 px-4 py-3 bg-neutral-50 rounded-[5px] justify-center items-center gap-2"
                      onClick={() => setOpenSlider((prev) => !prev)}
                    >
                      <ImageOutline />
                      <span className="text-[#081120] text-base font-semibold font-['Inter']">
                        View All Images
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ))}
      </div>
      {openSlider && (
        <Slider setOpenSlider={setOpenSlider} selectedImage={selectedImage} />
      )}
    </>
  );
}

export default TourImagesWebTablet;
