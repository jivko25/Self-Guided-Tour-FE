"use client";
import React, { useEffect, useRef, useState } from "react";
import ChevronDown from "../components/Svg/ChevronDown";

const list1 = [
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

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div
      className="flex flex-col items-center justify-start min-h-[190vh] w-full pb-[70px]
     gap-[30px] p-[10px] 
    web:mt-[0px] web:gap-[30px] web:justify-start web:min-h-[110vh]
    tablet:mt-[50px] tablet:gap-[30px] tablet:justify-evenly tablet:min-h-[190vh]
    "
    >
      <h1
        className="w-full max-w-[884px] text-center text-[#081120] font-medium font-['Inter'] text-xl my-[50px]
      web:text-[31px] web:leading-[46.50px] web:my-[60px]
      tablet:text-[31px] tablet:leading-[46.50px] tablet:my-[0px]
      "
      >
        Do you need to know more? Here are some frequently asked question that
        might help.{" "}
      </h1>
      <div
        className="flex w-full items-center justify-evenly flex-col gap-[20px]
      web:flex-row web:gap-[50px]
      tablet:flex-col tablet:gap-[20px]
      phone:gap-[20px]
      "
      >
        <div className="flex flex-col gap-[35px] web:gap-[20px] tablet:gap-[20px] phone:gap-[15px]">
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

        <div className="flex flex-col gap-[35px] web:gap-[20px] tablet:gap-[20px] phone:gap-[15px]">
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
    <div className="flex flex-col relative w-full max-w-[582px] mb-4">
      <div
        ref={containerRef}
        className="flex items-start justify-between mb-[10px] gap-[10px]"
      >
        <p
          className="text-[#081120] font-medium font-['Inter'] text-base
        web:text-xl
        tablet:text-xl
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
          style={
            isLast
              ? {
                  bottom: `-${containerHeight * 3.6}px`,
                  minHeight: `${containerHeight * 3.6}px`,
                }
              : {
                  bottom: `-${containerHeight * 3.6}px`,
                  minHeight: `${containerHeight * 3.6}px`,
                }
          }
          className="absolute bg-[#FAFAFA] text-[#13294b] text-base font-normal font-['Inter'] leading-normal z-10 pt-[20px]"
        >
          {description}
        </p>
      )}
    </div>
  );
}

export default Page;
