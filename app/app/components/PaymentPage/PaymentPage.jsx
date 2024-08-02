import Btn from "../Buttons/Btn";
import PaymentForm from "./PaymentPageComponents/PaymentForm";
import TourCard from "./PaymentPageComponents/TourCard";

import XButton from "../Buttons/XButton";
function PaymentPage() {
  return (
    <section
      className="m-[215px] text-[#081120]
                       web:mt-16  web:mb-[136px]
                       tablet:mt-[125px]
                       phone:mt-[92px]
                        "
    >
      <div className="flex justify-between web:mb-[92px] tablet:mb-16 phone:mb-16">
        <h1 className="web:text-[39px] tablet:text-[31px] phone:text-[25px]">
          Payment Information
        </h1>
        <XButton />
      </div>
      <div className="flex  gap-16  justify-center">
        <PaymentForm />
        <TourCard />
      </div>
    </section>
  );
}

export default PaymentPage;
