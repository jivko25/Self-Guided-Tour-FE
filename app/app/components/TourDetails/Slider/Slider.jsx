import React, { useEffect, useState } from "react";
import CloseIcon from "../Svgs/CloseIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "../Svgs/Next";

// Slider component that handles image slider functionality
function Slider({
  title,
  totalImages,
  setOpenSlider,
  selectedImage,
  setSelectedImage,
  landmarks,
  thumbnailImageUrl,
  sliderIndex,
}) {
  // State to track current image index in the slider
  const [currentIndex, setCurrentIndex] = useState(sliderIndex);

  const images = [
    { resourceUrl: thumbnailImageUrl, resourceId: "thumbnail" },
    ...landmarks.flatMap((landmark) =>
      landmark.resources
        ? landmark.resources.filter(
            (resource) => resource.resourceType === "Image"
          )
        : []
    ),
  ];

  // Function to navigate to the previous image
  const handlePrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].resourceUrl);
  };

  // Function to navigate to the next image
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;

    // Check if the image exists at newIndex
    if (images[newIndex]) {
      setCurrentIndex(newIndex);
      setSelectedImage(images[newIndex].resourceUrl);
    }
  };

  // When the user clicks on a thumbnail, update the selected image and index
  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black w-full h-full p-[15px] overflow-y-auto hideScroll">
      <div className="flex flex-col items-center justify-center w-full h-auto">
        <div className="flex w-full items-center web:justify-end tablet:justify-center py-[15px]">
          <h1 className="hidden web:hidden tablet:flex w-full text-white text-[39px] font-medium font-['Inter'] leading-[58.50px] ">
            {title}
          </h1>
          <CloseIcon
            onClick={() => setOpenSlider(false)}
            className="cursor-pointer text-[#FFFFFF] w-10"
          />
        </div>

        <div
          className="flex w-full web:h-full tablet:h-full  justify-center
      web:flex-row web:items-start web:gap-10
      tablet:flex-col tablet:items-center tablet:gap-10
      "
        >
          <div className="flex items-center tablet:ml-[2%]">
            {/* The large image in the carousel */}
            <div className="flex flex-col">
              <h1 className="hidden web:block mb-[50px] w-full text-white text-[39px] font-medium font-['Inter'] leading-[58.50px]">
                {title}
              </h1>

              <div className="flex items-center justify-center relative">
                {/* Button for the previous image */}
                {images.length > 1 && currentIndex > 0 && (
                  <div className="absolute left-[-30px]">
                    <button
                      className="flex items-center justify-center w-[60px] h-[60px] bg-neutral-50 rounded-full border border-[#d1d0d8] z-10"
                      onClick={handlePrevious}
                    >
                      <Next className="w-[30px] h-[30px]  transform rotate-180" />
                    </button>
                  </div>
                )}

                <img
                  src={selectedImage}
                  alt="Selected"
                  className="max-w-full max-h-full mx-auto tablet:w-[685px] tablet:h-[400px] web:w-[1002px] web:h-[600px] rounded-[15px] object-cover"
                />

                {/* Button for the next image */}
                {totalImages > 0 && (
                  <div className=" absolute right-[-30px]">
                    <button
                      className="flex items-center justify-center w-[60px] h-[60px] bg-neutral-50 rounded-full border border-[#d1d0d8] z-10"
                      onClick={handleNext}
                    >
                      <Next className="w-[30px] h-[30px]" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Gallery of thumbnails */}
          <div className="flex h-full items-start">
            <div
              className="grid  hide-scrollbar gap-[24px]  
                        web:grid-cols-2 web:max-h-[650px] web:mt-[109px] overflow-y-auto hideScroll
                        tablet:grid-cols-4 tablet:max-h-full tablet:mt-[0px]
                        "
            >
              {images.map((resource, index) => (
                <img
                  key={resource.resourceId}
                  className={`w-[182px] h-[100px] web:w-[200px] web:h-[140px] tablet:w-[182px] tablet:h-[100px] rounded-[15px] object-cover cursor-pointer ${
                    selectedImage === resource.resourceUrl
                      ? "border-2 border-white"
                      : ""
                  }`}
                  src={resource.resourceUrl}
                  alt={`Landmark Image ${index + 1}`}
                  onClick={() => handleImageClick(resource.resourceUrl, index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
