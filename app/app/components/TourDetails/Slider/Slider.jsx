import React, { useEffect, useState } from "react";
import CloseIcon from "../Svgs/CloseIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "../Svgs/Next";

// Slider component that handles image slider functionality
function Slider({
  title,
  setOpenSlider,
  selectedImage,
  setSelectedImage,
  landmarks,
  thumbnailImageUrl,
}) {
  // State to track current image index in the slider
  const [currentIndex, setCurrentIndex] = useState(
    landmarks
      .flatMap((landmark) =>
        landmark.resources
          ? landmark.resources.filter(
              (resource) => resource.resourceType === "Image"
            )
          : []
      )
      .findIndex((resource) => resource.resourceUrl === selectedImage)
  );

  // Filter all images from landmarks
  const images = landmarks.flatMap((landmark) =>
    landmark.resources
      ? landmark.resources.filter(
          (resource) => resource.resourceType === "Image"
        )
      : []
  );

  // UseEffect to set default image if no image is selected
  useEffect(() => {
    if (!selectedImage) {
      // Set the default image to the thumbnail image
      setSelectedImage(thumbnailImageUrl);
      // Set the current index to 0 (first image)
      setCurrentIndex(0);
    }
  }, [selectedImage, thumbnailImageUrl, setSelectedImage]);

  // Function to navigate to the next image
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].resourceUrl);
  };

  // Function to navigate to the previous image
  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].resourceUrl);
  };

  // When the user clicks on a thumbnail, update the selected image and index
  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center h-auto max-h-screen overflow-y-auto   web:overflow-y-hidden  ">
      <div className="flex flex-col items-center justify-center bg-black w-full min-h-screen p-4 relative py-[100px]">
        <CloseIcon onClick={() => setOpenSlider(false)} />
        <div
          className="flex w-full web:h-full tablet:h-full  justify-center
      web:flex-row web:items-start web:gap-10
      tablet:flex-col tablet:items-center tablet:gap-10
      "
        >
          {/* Button for the previous image */}
          {/* <button
            className="text-white bg-gray-800 px-4 py-2 rounded-full"
            onClick={handlePrev}
          >
            {"<"} Prev
          </button> */}

          <h1 className="hidden web:hidden tablet:block mb-[10px] w-full text-white text-[39px] font-medium font-['Inter'] leading-[58.50px] ">
            {title}
          </h1>
          <div className="flex items-center">
            {/* The large image in the carousel */}
            <div className="flex flex-col">
              <h1 className="hidden web:block mb-[50px] w-full text-white text-[39px] font-medium font-['Inter'] leading-[58.50px]">
                {title}
              </h1>

              <img
                src={selectedImage}
                alt="Selected"
                className="max-w-full max-h-full mx-auto tablet:w-[685px] tablet:h-[400px] web:w-[1002px] web:h-[600px] rounded-[15px] object-cover"
              />
            </div>

            {/* Button for the next image */}
            <div className="flex items-center justify-center h-full ml-[-30px]">
              <button
                className="flex items-center justify-center web:mt-[80px] tablet:mt-[30px] w-[60px] h-[60px] bg-neutral-50 rounded-full border border-[#d1d0d8]"
                onClick={handleNext}
              >
                <Next className="w-[30px] h-[30px]" />
              </button>
            </div>
          </div>

          {/* Gallery of thumbnails */}
          <div className="flex h-full items-start">
            <div
              className="grid  hide-scrollbar gap-[24px]  
            web:grid-cols-2 web:max-h-[650px] web:mt-[109px] overflow-y-auto 
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

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }

        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

export default Slider;
