import TourCardSkeleton from "./TourCardSkeleton";
import PaymentElementSkeleton from "./PaymentElementSkeleton";

function PaymentPageSkeleton() {
  return (
    <div className="flex  gap-16  justify-center">
      <PaymentElementSkeleton />
      <TourCardSkeleton />
    </div>
  );
}

export default PaymentPageSkeleton;
