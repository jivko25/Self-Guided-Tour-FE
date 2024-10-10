import React from "react";

function Summary() {
  return (
    <section
      className="hidden  flex-col items-center justify-center w-full h-full
    web:flex web:min-h-[350px] web:max-w-[1186px]
    tablet:flex tablet:min-h-[350px] tablet:max-w-[766px]
 
    "
    >
      <h2
        className="text-[#081120] font-medium leading-[58.50px] text-center
      web:text-[39px] web:mb-[20px] 
      tablet:text-[31px] tablet:mb-[10px] 
      "
      >
        Create your own adventure, or follow the trail of insiders who know the
        hidden gems
      </h2>
      <div
        className="text-center text-[#13294b] font-normal w-full
      web:text-xl web:max-w-[1186px]
      tablet:text-base tablet:max-w-[766px] tablet:px-[20px]
      "
      >
        Why rush through a guided tour when you can explore at your own pace?
        Discover cities, culture, and cool spots with tours created by locals
        who know the best-kept secrets. Whether you're wandering through
        historic streets or tracking down the best street food, you're in charge
        of your experience.
      </div>
    </section>
  );
}

export default Summary;
