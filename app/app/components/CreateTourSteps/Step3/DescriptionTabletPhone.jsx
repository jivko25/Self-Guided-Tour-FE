import React from "react";

function DescriptionTabletPhone() {
  return (
    <section
      className="hidden items-center justify-between w-full 
          web:hidden web:max-w-[581px] web:pt-[10px] web:pb-[20px]
          tablet:flex tablet:max-w-[581px] tablet:pt-[10px] tablet:pb-[20px] tablet:items-start
          phone:flex phone:max-w-[361px] phone:pt-[10px] phone:pb-[20px] phone:text-sm phone:items-start"
    >
      <div>
        <h4
          className="text-gray-900 text-2xl font-medium leading-9 
              tablet:font-medium
              phone:text-xl "
        >
          Describe and shoot
        </h4>
        <p
          className="w-[425px] text-blue-950 text-base font-normal leading-normal 
                tablet:w-[425px] tablet:text-base
                phone:w-[269px] phone:text-sm"
        >
          Add description, images and audio files for the location so that the
          other travelers know more about it.
        </p>
      </div>
      <p
        className="text-yellow-500 text-base font-medium leading-normal 
              tablet:w-[85px] tablet:text-base
              phone:w-[74px] phone:text-sm"
      >
        Step 3 of 4
      </p>
    </section>
  );
}

export default DescriptionTabletPhone;
