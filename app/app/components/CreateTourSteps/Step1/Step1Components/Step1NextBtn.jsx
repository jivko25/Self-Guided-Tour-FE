import Btn from "@/app/components/Buttons/Btn"
import { useCreateTour } from "@/app/context/createTourContext";


const Step1NextBtn = () => {
    const { nextStep } = useCreateTour();
    return (
        <div className="
    relative web:w-[1920px] web:h-[138px] 
    tablet:w-[834px] tablet:h-[100px]
    phone:hidden tablet:block
    border-t border-[#E7EAED] ">

            <Btn
                className="
        absolute web:left-[1151px] web:top-[36px]
        tablet:left-[608px] tablet:top-[19px]
        phone:hidden tablet:block
        font-semibold text-[16px] border-b-2 border-b-[#E8B600] w-[177px] tablet:w-[100px] web:w[100px] h-[43px] "
                variant="transparent"
                text="Next"
                onClick={nextStep}
            />
        </div>
    )
}

export default Step1NextBtn

