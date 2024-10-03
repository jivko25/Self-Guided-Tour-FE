"use client";
import React, { useEffect, useRef, useState } from "react";
import ChevronDown from "../components/Svg/ChevronDown";

const list1 = [
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit? Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
];

const list2 = [
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
  {
    title:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit?",
    description:
      "Lorem ipsum odor amet, consectetuer adipiscing elit. Vulputate habitant mollis velit, egestas efficitur bibendum turpis. Felis quam efficitur pretium lobortis sit at conubia.",
  },
];

function Page() {
  const [openIndex, setOpenIndex] = useState(null);

  // Функция за управление на отварянето/затварянето
  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="flex flex-col items-center justify-evenly min-h-[80vh] w-full">
      <h1 className="w-[884px] text-center text-[#081120] text-[31px] font-medium font-['Inter'] leading-[46.50px]">
        Do you need to know more? Here are some frequently asked question that
        might help.{" "}
      </h1>
      <div className="flex w-full items-center justify-evenly">
        {/* Първи контейнер - мапване на първия списък */}
        <div className="flex flex-col">
          {list1.map((item, index) => (
            <CollapsibleItem
              key={index}
              title={item.title}
              description={item.description}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)} // Предаваме индекса за отваряне/затваряне
            />
          ))}
        </div>

        <div className="flex flex-col">
          {list2.map((item, index) => (
            <CollapsibleItem
              key={index + list1.length}
              title={item.title}
              description={item.description}
              isOpen={openIndex === index + list1.length}
              onToggle={() => handleToggle(index + list1.length)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function CollapsibleItem({ title, description, isOpen, onToggle }) {
  const containerRef = useRef(null);
  const [containerHeight, setContainerHeight] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const height = containerRef.current.offsetHeight;
      setContainerHeight(height);
    }
  }, [isOpen]);

  return (
    <div className="flex flex-col relative w-[582px] mb-4">
      <div ref={containerRef} className="flex items-start justify-between">
        <p className="text-[#081120] text-xl font-medium font-['Inter']">
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

      <div className="w-[582px] h-[0px] border border-[#d1d0d8]"></div>

      {isOpen && (
        <p
          style={{ bottom: `-${containerHeight * 1.5}px`, minHeight:`${containerHeight * 1}px` }}
          className="absolute bg-white text-[#13294b] text-base font-normal font-['Inter'] leading-normal z-10"
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default Page;
