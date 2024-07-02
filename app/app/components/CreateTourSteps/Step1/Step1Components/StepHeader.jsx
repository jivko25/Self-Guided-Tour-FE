import React from 'react'

const StepHeader = ({title, description, step}) => {
  return (
    <div><header className="flex flex-row justify-between">
    <h2 className=" font-semibold text-[20px] tablet:text-[24px]">{title}</h2>
    <span className="mt-[7px] tablet:mt-0 text-[#E8B600]">
     {` Step ${step} of 4`}
    </span>
  </header>
  <p className="max-w-[296px] tablet:max-w-[425px] font-normal">
    {description}
  </p></div>
  )
}

export default StepHeader