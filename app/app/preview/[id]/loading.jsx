export default function Loading() {
  return (
    <>
      <header className="hidden w-[90%] web:flex flex-row justify-between items-center mt-16 mb-32">
        <h1 className="text-[39px] font-medium flex w-[622px] h-[59px] bg-[#e2e2e2] animate-pulse"></h1>
        <div className="flex flex-row items-start gap-3">
          <span className="hidden tablet:inline text-[16px] w-[70px] h-[19px] font-semibold bg-[#e2e2e2] animate-pulse"></span>
        </div>
      </header>
      <div
        className="w-full h-full web:relative mt-24 tablet:mt-[151px] web:mt-[64px] 
                  px-[8px] phone:px-[16px] tablet:px-[125px] web:px-[56px]"
      >
        <section
          className="flex flex-col align-center text-[14px]
                    mb-[30px] web:mb-0 font-medium text-[#081120] text-[14px] web:text-[16px]
                    web:h-[582px] web:w-1/2"
        >
          <div className="overflow-y-scroll web:pr-[40px] web:mr-[80px]">
            <header className="flex flex-row justify-between mb-9 tablet:mb-6 web:hidden">
              <div>
                <h2 className="text-[24px] tablet:text-[31px] font-medium mb-2 tablet:mb-[22px] h-[36px] bg-[#e2e2e2] animate-pulse"></h2>
                <p className="font-medium text-[18px] tablet:text-[24px] w-[126px] h-[27px] bg-[#e2e2e2] animate-pulse"></p>
              </div>
              <div className="flex flex-row items-start gap-3">
                <span className="tablet:inline text-[16px] w-[70px] font-semibold h-[19px] bg-[#e2e2e2] animate-pulse"></span>
              </div>
            </header>
            <section
              className="h-[250px] phone:h-[297px] tablet:h-[476px] mb-[12px] web:w-1/2 web:h-[582px] 
                            web:absolute web:right-[60px] web:top-0 bg-[#e2e2e2] animate-pulse"
            ></section>
            <section className="flex flex-wrap w-[100%] gap-6 mt-[36px] tablet:mt-[24px] web:mt-[36px]">
              <ul className="text-[16px] text-[#13294B]">
                <li
                  className="relative ml-5 before:absolute before:block before:content-[''] 
                                before:bg-[#617086] before:w-[0.5px] before:top-0 before:bottom-0
                                before:top-[15px] pb-[64px] last:pb-[0px]"
                >
                  <div className="absolute -left-[7px] w-[15px] h-[15px] border-[0.5px] rounded-full border-[#617086]"></div>
                  <div className="ml-6">
                    <span className="font-light mb-2 w-[96px] h-[24px] tablet:h-[30px] bg-[#e2e2e2] animate-pulse"></span>
                    <h3 className="font-medium text-[18px] text-[#081120] mb-4 w-[241px] h-[27px] tablet:h-[36px] bg-[#e2e2e2] animate-pulse"></h3>
                    <div className="font-semibold text-[#4285F4] flex flex-col-reverse tablet:flex-row gap-y-3 gap-x-8 items-start tablet:gap-x-11 mb-6 ml-2 tablet:ml-6">
                      <div>
                        <div className="flex items-center gap-x-3">
                          <span className="w-[82px] h-[19px] bg-[#e2e2e2] animate-pulse"></span>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="w-[82px] h-[19px] bg-[#e2e2e2] animate-pulse"></span>
                      </div>
                    </div>
                    <p className="text-[14px] w-[200px] phone:w-[300px] tablet:w-[400px] h-[71px] bg-[#e2e2e2] animate-pulse"></p>
                  </div>
                </li>
              </ul>
            </section>
          </div>
        </section>
        <div className="web:border-t border-[#E7EAED] mb-[130px] tablet:mb-0">
          <div className="web:w-1/2">
            <div
              className="web:w-[100%] mt-[64px] tablet:mt-[19px] tablet:mb-[38px] web:mt-[36px] web:mb-[59px] 
            flex flex-col tablet:flex-row-reverse gap-6 tablet:gap-5 web:gap-6 tablet:justify-center"
            >
              <div
                className="w-full tablet:w-[182px] web:w-[220px] webl:w-[278px] h-[44px] font-semibold bg-[#e2e2e2] animate-pulse"
                text="Play Tour"
              ></div>
              <div
                className="w-full tablet:w-[182px] web:w-[220px] webl:w-[278px] h-[44px] font-semibold bg-[#e2e2e2] animate-pulse"
                text="Back"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
