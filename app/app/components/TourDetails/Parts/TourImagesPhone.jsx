import React from "react";

function TourImagesPhone({ thumbnailImageUrl, landmarks }) {
  return (
    <div
      className="hidden web:hidden tablet:hidden 
        phone:flex phone:w-full phone:overflow-x-auto phone:gap-[10px]
        smallPhone:flex smallPhone:w-full smallPhone:overflow-x-auto smallPhone:gap-[10px]
        "
      style={{
        "::WebkitScrollbar": { display: "none" },
        MsOverflowStyle: "none",
        ScrollbarWidth: "none",
      }}
    >
      <img
        className="object-cover w-full h-full 
                  phone:w-[361px] phone:h-[260px]
                  smallPhone:w-[361px] smallPhone:h-[260px]
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
                  className="object-cover rounded-[5px]
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

export default TourImagesPhone;
