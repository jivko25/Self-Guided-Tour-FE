import Image from "next/image";
import X from "../../public/svg/X.svg";
function CloseButton({
  onClick,
  text = "Cancel",
  icon = X,
  spaceBetween = 2,
  className,
}) {
  return (
    <button
      type="button"
      className={`flex gap-${spaceBetween} ${className}`}
      onClick={onClick}
    >
      <Image src={icon} alt={text} width={24} height={24} />
      <p className="hidden tablet:flex text-nowrap">{text}</p>
    </button>
  );
}

export default CloseButton;
