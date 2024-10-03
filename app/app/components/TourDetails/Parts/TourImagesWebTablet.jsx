import React, { useState } from "react";
import ImageOutline from "../Svgs/ImageOutline";
import Slider from "../Slider/Slider";

function TourImagesWebTablet({ title, thumbnailImageUrl, landmarks }) {
  const [openSlider, setOpenSlider] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sliderIndex, setSliderIndex] = useState(0);

  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setSliderIndex(index); // Set the index when an image is clicked
    setOpenSlider(true);
  };

  // Get all image resources, including the thumbnail image as the first image
  const images = [
    { resourceUrl: thumbnailImageUrl, resourceId: "thumbnail" },
    ...(landmarks
      ? landmarks.flatMap((landmark) =>
          landmark.resources
            ? landmark.resources.filter(
                (resource) => resource.resourceType === "Image"
              )
            : []
        )
      : []),
  ];
  const totalImages = images.length;

  return (
    <>
      <div
        className={`hidden phone:hidden smallPhone:hidden overflow-hidden ${
          totalImages > 3
            ? "web:grid web:grid-cols-4 web:grid-rows-2 web:gap-4 web:w-full web:h-full web:max-h-[582px] web:items-center web:justify-center web:rounded-[15px] tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full tablet:items-center tablet:justify-center tablet:rounded-[15px]"
            : "w-full web:flex web:flex-row web:w-full tablet:flex tablet:flex-col tablet:w-full web:rounded-[15px] tablet:rounded-[15px] gap-[20px]"
        }
         `}
      >
        {/* Case with 1 image */}
        {totalImages === 1 && (
          <img
            className="object-cover w-full overflow-hidden cursor-pointer
                web:h-[500px]
                tablet:w-full tablet:h-[500px]
            "
            src={images[0].resourceUrl}
            onClick={() => handleImageClick(images[0].resourceUrl, 0)}
            alt="Cover Image"
          />
        )}

        {/* Case with 2 images */}
        {totalImages === 2 && (
          <>
            <img
              className="object-cover overflow-hidden cursor-pointer
                web:h-[500px] web:flex-1
                tablet:h-[314px] tablet:w-full
            "
              src={images[0].resourceUrl}
              onClick={() => handleImageClick(images[0].resourceUrl, 0)}
              alt="Cover Image"
            />
            <img
              className="object-cover overflow-hidden cursor-pointer
                web:h-[500px] web:flex-1
                tablet:h-[314px] tablet:w-full
            "
              src={images[1].resourceUrl}
              onClick={() => handleImageClick(images[1].resourceUrl, 1)}
              alt="Second Image"
            />
          </>
        )}

        {/* Case with 3 images */}
        {totalImages === 3 && (
          <>
            <img
              className="object-cover overflow-hidden cursor-pointer w-full
              web:h-[500px]
              tablet:h-[180px] tablet:w-full
     
            "
              src={images[0].resourceUrl}
              onClick={() => handleImageClick(images[0].resourceUrl, 0)}
              alt="Cover Image"
            />
            <img
              className="object-cover overflow-hidden cursor-pointer w-full
              web:h-[500px]
              tablet:h-[180px] tablet:w-full
     
            "
              src={images[1].resourceUrl}
              onClick={() => handleImageClick(images[1].resourceUrl, 1)}
              alt="Second Image"
            />
            <img
              className="object-cover overflow-hidden cursor-pointer w-full
              web:h-[500px]
              tablet:h-[180px] tablet:w-full
     
            "
              src={images[2].resourceUrl}
              onClick={() => handleImageClick(images[2].resourceUrl, 2)}
              alt="Third Image"
            />
          </>
        )}

        {/* Case with 3 or more images */}
        {totalImages > 3 && (
          <>
            <img
              className="object-cover w-full h-full overflow-hidden
            web:col-span-2 web:row-span-2 web:h-[500px]  
            tablet:w-full tablet:h-[360px] tablet:col-span-2 cursor-pointer
     
            "
              src={images[0].resourceUrl}
              onClick={() => handleImageClick(images[0].resourceUrl, 0)}
              alt="Cover Image"
            />
            {images.slice(1, 5).map((resource, index) => (
              <div key={resource.resourceId} className="relative">
                <img
                  className="object-cover overflow-hidden
                      web:w-[431px] web:h-[244px]
                      tablet:w-full tablet:h-[280px] cursor-pointer
             
                      "
                  src={resource.resourceUrl}
                  alt={`Landmark Image ${index + 1}`}
                  onClick={() =>
                    handleImageClick(resource.resourceUrl, index + 1)
                  }
                />
                {index === 1 && totalImages > 4 && (
                  <div className="hidden web:block web:absolute web:right-[20px] web:top-[20px]">
                    <button
                      className="flex h-12 px-4 py-3 bg-neutral-50 rounded-[5px] justify-center items-center gap-2"
                      onClick={() => setOpenSlider((prev) => !prev)}
                    >
                      <ImageOutline />
                      <span className="text-[#081120] text-base font-semibold  ">
                        View All Images
                      </span>
                    </button>
                  </div>
                )}
              </div>
            ))}
          </>
        )}
      </div>

      {openSlider && (
        <Slider
          title={title}
          totalImages={totalImages}
          setOpenSlider={setOpenSlider}
          selectedImage={selectedImage}
          setSelectedImage={setSelectedImage}
          images={images}
          sliderIndex={sliderIndex}
        />
      )}
    </>
  );
}

export default TourImagesWebTablet;
