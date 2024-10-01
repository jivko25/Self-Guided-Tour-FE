import Image from "next/image";
import { useEffect, useRef, useState } from "react";

function TourImagesPhone({ thumbnailImageUrl, landmarks }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [images, setImages] = useState([]);
  const sliderRef = useRef(null);
  const isDragging = useRef(false);
  const startPos = useRef(0);
  const scrollLeft = useRef(0);

  useEffect(() => {
    const urlArr = [];

    if (thumbnailImageUrl) {
      urlArr.unshift(thumbnailImageUrl);
    }

    if (landmarks) {
      landmarks.forEach((landmark) => {
        if (landmark.resources.length > 0) {
          landmark.resources.forEach((file) => {
            if (file.resourceType === "Image") {
              urlArr.push(file.resourceUrl);
            }
          });
        }
      });
    }

    setImages(urlArr);
  }, [landmarks, thumbnailImageUrl]);

  // Handle scroll event to update the current slide
  const handleScroll = () => {
    const scrollLeft = sliderRef.current.scrollLeft;
    const slideWidth = sliderRef.current.clientWidth;
    const newSlide = Math.round(scrollLeft / slideWidth);
    setCurrentSlide(newSlide);
  };

  // Scroll to a specific slide on dot click
  const scrollToSlide = (index) => {
    const slideWidth = sliderRef.current.clientWidth;
    sliderRef.current.scrollTo({
      left: slideWidth * index,
      behavior: "smooth",
    });
    setCurrentSlide(index);
  };

  // Start dragging
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startPos.current = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft.current = sliderRef.current.scrollLeft;
  };

  // Drag while mouse is moving
  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startPos.current) * 2; // Multiply by 2 for faster scrolling
    sliderRef.current.scrollLeft = scrollLeft.current - walk;
  };

  // Stop dragging
  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      className="relative web:hidden tablet:hidden 
        w-full overflow-hidden gap-[10px] scroll-smooth snap-x snap-mandatory"
    >
      <div
        className="flex w-full overflow-x-scroll scroll-smooth snap-x rounded-[5px] hideScroll"
        ref={sliderRef}
        onScroll={handleScroll}
      >
        {images.length > 0 &&
          images.map((image, i) => (
            <div
              key={i}
              className="relative flex-shrink-0 w-full h-56 snap-start cursor-pointer"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              <Image
                src={image}
                sizes="(max-width: 1280px) 50vw, 33vw"
                fill={true}
                style={{ objectFit: "cover" }}
                alt={`Landmark Image ${i + 1}`}
                priority={true}
                draggable={false}
              />
            </div>
          ))}
      </div>
      <div className="flex justify-center mt-4 space-x-1">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2.5 w-2.5 border border-[#617086] rounded-full cursor-pointer transition-colors duration-300 ${
              currentSlide === index ? "bg-[#617086]" : "bg-none"
            }`}
            onClick={() => scrollToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default TourImagesPhone;
