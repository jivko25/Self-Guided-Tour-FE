import React from 'react'

const SteapHeader = ({
    title,
    description,
    step
}) => {
    return (
        <>
            <header className="flex flex-row justify-between tablet:mt-[-5rem]">
                <h2 className="text-[20px] tablet:text-[24px]  
                font-medium leading-9 text-[#081120]">{title}</h2>

                <span className="mt-[15px] 
                text-[14px] tablet:text-[16px] font-medium text-[#E8B600]">
                    {`Step ${step} of 4`}
                </span>
            </header>
            <p className="max-w-[296px] tablet:max-w-[425px] font-normal
           mt-[-15px] tablet:mb-[35px] text-[14px] tablet:text-[16px] text-[#13294B]">
                {description}</p>
        </>
    )
}


export default SteapHeader