import React from "react";

function TourImages({ thumbnailImageUrl, landmarks }) {
  return (
    <div
      className="
        web:grid web:grid-cols-4 web:grid-rows-2 web:gap-4 web:w-full web:h-full web:max-h-[582px] web:items-center web:justify-center
        tablet:grid tablet:grid-cols-2 tablet:gap-4 tablet:w-full tablet:h-full tablet:items-center tablet:justify-center 
        phone:flex phone:w-full phone:overflow-x-auto 
        smallPhone:flex smallPhone:w-full smallPhone:overflow-x-auto 
        "
      style={{
        "::WebkitScrollbar": { display: "none" },
        MsOverflowStyle: "none",
        ScrollbarWidth: "none",
      }}
    >
      <img
        className="object-cover w-full h-full 
            web:col-span-2 web:row-span-2 web:h-[488px] 
            tablet:w-full tablet:h-[560px] 
            phone:max-w-[722px] phone:h-[520px]
            smallPhone:max-w-[722px] smallPhone:h-[520px]
            "
        src={thumbnailImageUrl}
        alt="Cover Image"
      />
      {landmarks &&
        landmarks.flatMap((landmark, index) =>
          landmark.resources
            ? landmark.resources.map((resource, resourceIndex) => (
                <img
                  key={resource.resourceId}
                  className="object-cover
                      web:w-[431px] web:h-[244px]
                      tablet:w-full tablet:h-[280px]
                      phone:w-[361px] phone:h-[260px]
                      smallPhone:w-[361px] smallPhone:h-[260px]
                      "
                  src={resource.resourceUrl}
                  alt={`Landmark Image ${index + 1}`}
                />
              ))
            : []
        )}

   
    </div>
  );
}

export default TourImages;
