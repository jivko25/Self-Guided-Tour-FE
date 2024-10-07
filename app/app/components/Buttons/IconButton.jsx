import Image from "next/image";
import X from "../../public/svg/X.svg";
function IconButton({
  onClick,
  text = "",
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
      {icon && (
        <Image src={icon} alt={text || "button-icon"} width={24} height={24} />
      )}
      {text ? <p className="hidden tablet:flex text-nowrap hover:opacity-70">{text}</p> : ""}
    </button>
  );
}

export default IconButton;
