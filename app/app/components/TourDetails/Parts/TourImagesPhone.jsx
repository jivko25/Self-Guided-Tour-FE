import Image from "next/image";
import React from "react";

function TourImagesPhone({ thumbnailImageUrl, landmarks }) {
  return (
    <div
      className="relative flex web:hidden tablet:hidden 
        w-full overflow-x-auto gap-[10px] h-[260px]"
      style={{
        "::WebkitScrollbar": { display: "none" },
        MsOverflowStyle: "none",
        ScrollbarWidth: "none",
      }}
    >
      <Image
        src={thumbnailImageUrl}
        fill={true}
        style={{ objectFit: "cover" }}
        alt="Cover Image"
      />

      {landmarks &&
        landmarks.flatMap((landmark, index) =>
          landmark.resources
            ? landmark.resources
                .filter((resource) => resource.resourceType === "Image")
                .map((resource, resourceIndex) => (
                <Image
                  key={resource.resourceId}
                  fill={true}
                  src={resource.resourceUrl}
                  style={{ objectFit: "cover" }}
                  alt={`Landmark Image ${index + 1}`}
                />
              ))
            : []
        )}
    </div>
  );
}

export default TourImagesPhone;
