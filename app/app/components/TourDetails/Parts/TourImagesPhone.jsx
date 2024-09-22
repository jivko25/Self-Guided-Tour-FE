import React from "react";

function TourImagesPhone({ thumbnailImageUrl, landmarks }) {
  console.log(landmarks);
  
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
            ? landmark.resources.map((resource, resourceIndex) => {
                if (resource.resourceType === "Image") {
                  return (
                    <img
                      key={resource.resourceId}
                      className="object-cover rounded-[5px]
                          phone:w-[361px] phone:h-[260px]
                          smallPhone:w-[361px] smallPhone:h-[260px]
                          "
                      src={resource.resourceUrl}
                      alt={`Landmark Image ${index + 1}`}
                    />
                  );
                } else if (resource.resourceType === "Audio") {
                  return (
                    <audio
                      key={resource.resourceId}
                      controls
                      className="phone:w-[361px] smallPhone:w-[361px]"
                    >
                      <source src={resource.resourceUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                  );
                } else if (resource.resourceType === "Video") {
                  return (
                    <video
                      key={resource.resourceId}
                      controls
                      className="phone:w-[361px] phone:h-[260px] smallPhone:w-[361px] smallPhone:h-[260px]"
                    >
                      <source src={resource.resourceUrl} type="video/mp4" />
                      Your browser does not support the video element.
                    </video>
                  );
                }
                return null; 
              })
            : []
        )}
    </div>
  );
}

export default TourImagesPhone;
