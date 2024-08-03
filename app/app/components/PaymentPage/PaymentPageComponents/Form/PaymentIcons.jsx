import Image from "next/image";
import Visa from "../../../../public/svg/visa.svg";
import Mastercard from "../../../../public/svg/mastercard.svg";
import Maestro from "../../../../public/svg/maestro.svg";
function PaymentIcons({ className }) {
  return (
    <ul className={` flex gap-9 items-center ${className}`}>
      <li>
        <Image src={Visa} alt="Visa" />
      </li>
      <li>
        <Image src={Mastercard} alt="Mastercard" />
      </li>
      <li>
        <Image src={Maestro} alt="Maestro" />
      </li>
    </ul>
  );
}

export default PaymentIcons;
