import Btn from "../Buttons/Btn";
import PaymentForm from "./PaymentPageComponents/PaymentForm";
import TourCard from "./PaymentPageComponents/TourCard";

function PaymentPage() {
  return (
    <section className="m-[215px] mt-16 text-[#081120]">
      <div className="flex justify-between mb-16 ">
        <h1 className="text-[39px] font-medium">Payment Information</h1>
        <Btn variant="transperant" text="X Cancel" className="flex" />
      </div>
      <div className="flex  gap-16  justify-center">
        <PaymentForm />
        <TourCard />
      </div>
    </section>
  );
}

export default PaymentPage;
