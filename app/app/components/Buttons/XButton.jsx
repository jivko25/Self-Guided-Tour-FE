import Image from "next/image";
import X from "../../public/svg/X.svg";
function XButton({ onClick }) {
  return (
    <button className="flex gap-2" onClick={onClick}>
      <Image src={X} alt="Close" width={24} height={24} />
      <p className="hidden tablet:flex">Cancel</p>
    </button>
  );
}

export default XButton;
