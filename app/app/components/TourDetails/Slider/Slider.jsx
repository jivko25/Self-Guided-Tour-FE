import React, { useState } from "react";
import CloseIcon from "../Svgs/CloseIcon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Next from "../Svgs/Next";

function Slider({ setOpenSlider, selectedImage, setSelectedImage, landmarks }) {
  // Keep track of the current image index in the carousel
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

  // Function to navigate to the next image
  const handleNext = () => {
    const newIndex = (currentIndex + 1) % images.length; // Обръща цикъла
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].resourceUrl); // Актуализираме избраната снимка
  };

  // Function to navigate to the previous image
  const handlePrev = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length; // Обръща цикъла назад
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex].resourceUrl);
  };

  // When the user clicks on a thumbnail, update the selected image and index
  const handleImageClick = (imageUrl, index) => {
    setSelectedImage(imageUrl);
    setCurrentIndex(index); // Актуализиране на индекса
  };

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center bg-black w-full h-full p-4 relative">
        <CloseIcon onClick={() => setOpenSlider(false)} />

        <div className="flex flex-row w-full h-full max-h-[650px] items-start justify-center gap-10">
          {/* Button for the previous image */}
          {/* <button
            className="text-white bg-gray-800 px-4 py-2 rounded-full"
            onClick={handlePrev}
          >
            {"<"} Prev
          </button> */}

          {/* The large image in the carousel */}
          <div>
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-full mx-auto w-[1002px] h-[600px] rounded-[15px] object-cover"
            />
          </div>

          {/* Button for the next image */}
          <div className="flex items-center justify-center h-full ml-[-70px]">
          <button
            className="flex items-center justify-center w-[60px] h-[60px] bg-neutral-50 rounded-full border border-[#d1d0d8]"
            onClick={handleNext}
          >
            <Next className="w-[30px] h-[30px]"/>
          </button>
          </div>
          

          {/* Gallery of thumbnails */}
          <div className="flex h-full items-start">
            <div className="grid grid-cols-2 gap-[24px] max-h-[650px] overflow-y-auto">
              {images.map((resource, index) => (
                <img
                  key={resource.resourceId}
                  className={`w-[200px] h-[140px] rounded-[15px] object-cover cursor-pointer ${
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
          display: none; /* Hide scrollbar for Chrome, Safari, and Opera */
        }

        .hide-scrollbar {
          -ms-overflow-style: none; /* Hide scrollbar for Internet Explorer and Edge */
          scrollbar-width: none; /* Hide scrollbar for Firefox */
        }
      `}</style>
    </div>
  );
}

export default Slider;
