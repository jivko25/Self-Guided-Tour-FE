import React from 'react'

function TourImages({ thumbnailImageUrl, landmarks }) {
  return (
    <div
          className="
        web:grid web:grid-cols-4 web:grid-rows-2 web:gap-4 web:w-full web:h-full web:max-h-[520px] web:items-center web:justify-center
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
            className="tourCoverImg"
            src={thumbnailImageUrl}
            alt="Cover Image"
          />
          {landmarks &&
            landmarks.flatMap((landmark, index) =>
              landmark.resources
                ? landmark.resources.map((resource, resourceIndex) => (
                    <img
                      key={resource.resourceId}
                      className="tourImages"
                      src={resource.resourceUrl}
                      alt={`Landmark Image ${index + 1}`}
                    />
                  ))
                : []
            )}
        </div>
  )
}

export default TourImages