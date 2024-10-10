"use client";
import React, { useEffect, useRef, useState } from "react";
import ChevronDown from "../components/Svg/ChevronDown";

const list1 = [
  {
    title: "What is a self-guided tour?",
    description:
      "A self-guided tour lets you explore a destination at your own pace. No group, no schedule! You’ll follow a custom route created by a local or fellow traveler and discover places through their photos, stories, and recommendations.",
  },
  {
    title: "How do I create a tour?",
    description:
      "It’s easy! Just select your favorite spots on the map, add descriptions, photos, videos, and even voice recordings to each location. Once you're done, publish your tour for others to enjoy.",
  },
  {
    title: "Can I edit a tour after publishing it?",
    description:
      "Yes! You can go back and tweak your tour whenever you want. Add new stops, update information, or swap out photos and videos—it’s completely up to you.",
  },
  {
    title: "How do I buy a tour?",
    description:
      "Browse through our tours, find one that excites you, and click the 'Buy Tour' button. After purchasing, you’ll have full access to the route, descriptions, and media, so you can start exploring!",
  },
  {
    title: "Do I need to follow the tour in order?",
    description:
      "While it’s not required, we recommend following the author’s suggested route and sequence. The stops often tell a story or follow a theme that makes the experience richer.",
  },
];

const list2 = [
  {
    title: "Can I take the tour at my own pace?",
    description:
      "Absolutely! That’s the beauty of self-guided tours. You can take as much time as you want at each stop—there’s no rush.",
  },
  {
    title: "What if I get lost?",
    description:
      "No worries! The app has a built-in map that tracks your location, so you can easily find your way back to the tour path.",
  },
  {
    title: "What types of tours can I find?",
    description:
      "You’ll find walking, biking, and driving tours. Each tour will mention the recommended mode of transportation, so you can choose one that suits your style.",
  },
  {
    title: "Can I leave a review after taking a tour?",
    description:
      "Yes, we love feedback! After completing a tour, you can rate it and leave a review to help others find great experiences.",
  },
  {
    title: "How do I know if a tour is worth it?",
    description:
      "Each tour has ratings and reviews from people who have already taken it. Check them out to see what others thought before buying.",
  },
];

function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-[150vh] w-full pb-[70px]
     gap-[30px] p-[10px] 
    web:mt-[0px] web:gap-[30px] web:justify-start web:min-h-[80vh]
    tablet:mt-[50px] tablet:gap-[30px] tablet:justify-evenly tablet:min-h-[150vh]
    phone:min-h-[120vh]
    "
    >
      <h1
        className="w-full max-w-[884px] text-center text-[#081120] font-medium font-['Inter'] text-xl mb-[50px] mt-[40px]
      web:text-[31px] web:leading-[46.50px] web:mb-[50px] web:mt-[50px]
      tablet:text-[31px] tablet:leading-[46.50px] tablet:mb-[0px] tablet:mt-[0px]
      "
      >
        Do you need to know more? Here are some frequently asked question that
        might help.
      </h1>
      <div
        className="flex w-full items-center justify-evenly flex-col gap-[20px]
      web:flex-row web:gap-[50px]
      tablet:flex-col tablet:gap-[20px]
      phone:gap-[20px]
      "
      >
        <div className="flex flex-col w-full max-w-[582px] gap-[35px] web:gap-[20px] tablet:gap-[20px] phone:gap-[15px]">
          {list1.map((item, index) => (
            <CollapsibleItem
              key={index}
              title={item.title}
              description={item.description}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
              isLast={index === list1.length - 1}
            />
          ))}
        </div>

        <div className="flex flex-col w-full max-w-[582px] gap-[35px] web:gap-[20px] tablet:gap-[20px] phone:gap-[15px]">
          {list2.map((item, index) => (
            <CollapsibleItem
              key={index + list1.length}
              title={item.title}
              description={item.description}
              isOpen={openIndex === index + list1.length}
              onToggle={() => handleToggle(index + list1.length)}
              isLast={index === list2.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CollapsibleItem({ title, description, isOpen, onToggle, isLast }) {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      setContainerHeight(height);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col relative w-full mb-4">
      <div
        ref={containerRef}
        className="flex items-start justify-between mb-[10px] gap-[10px] w-full
        "
      >
        <p
          className="text-[#081120] font-medium font-['Inter'] text-sm
        web:text-xl
        tablet:text-xl
        phone:text-base
        "
        >
          {title}
        </p>
        <button className="" onClick={onToggle}>
          <ChevronDown
            className={`${
              isOpen ? "rotate-180" : "rotate-0"
            } transition-transform duration-300`}
          />
        </button>
      </div>

      <div className="w-full max-w-[582px] h-[0px] border border-[#d1d0d8]"></div>

      {isOpen && (
        <p
          className={`absolute top-[40px] bg-[#FAFAFA] text-[#13294b] text-sm font-normal font-['Inter'] leading-normal z-10 pt-[20px] h-[160px]  web:h-[150px] tablet:h-[150px] phone:h-[120px] phone:text-base ${
            isLast ? "web:h-[100px]" : ""
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default Page;
