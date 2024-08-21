import Image from "next/image";
import X from "../../public/svg/X.svg";
function CloseButton({ onClick, text = "Cancel" }) {
  return (
    <button type="button" className="flex gap-2" onClick={onClick}>
      <Image src={X} alt={text} width={24} height={24} />
      <p className="hidden tablet:flex">{text}</p>
    </button>
  );
}

export default CloseButton;
