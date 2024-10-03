import React from "react";

function Summary() {
  return (
    <section className="hidden  flex-col items-center justify-center w-full h-full
    web:flex web:min-h-[350px] web:max-w-[1792px]
    tablet:flex tablet:min-h-[350px]
 
    ">
      <h2 className="text-[#081120] font-medium   leading-[58.50px]
      web:text-[39px] web:mb-[20px] 
      tablet:text-[31px] tablet:mb-[10px] 
      ">
        Lorem ipsum odor amet
      </h2>
      <div className="text-center text-[#13294b] font-normal   w-full
      web:text-xl web:w-[80%]
      tablet:text-base tablet:w-[766px] tablet:px-[20px]
      ">
        Cursus ante mauris suspendisse laoreet placerat porta amet blandit.
        Venenatis habitasse ligula imperdiet ac sed facilisi. Sodales eget dis
        nibh natoque dictum ante cursus varius. Penatibus lacinia etiam mattis
        mollis porttitor. Cursus ante mauris suspendisse laoreet placerat porta
        amet blandit. Venenatis habitasse ligula imperdiet ac sed facilisi.
        Sodales eget dis nibh natoque dictum ante cursus varius. Penatibus
        lacinia etiam mattis mollis porttitor.
      </div>
    </section>
  );
}

export default Summary;
