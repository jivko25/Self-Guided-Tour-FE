import Link from "next/link";
import Image from "next/image";

export default function Btn({
  disabled,
  id,
  variant = "filled",
  fullWidth = false,
  type,
  text,
  link,
  onClick,
  className,
  icon, // Accept an icon path for Next.js Image
  iconPosition = "left", // 'left' or 'right'
  ...props
}) {
  const variantClasses = {
    filled:
      "bg-blue-950 text-white border-2 rounded-md border-transparent hover:bg-opacity-70",
    outlined:
      "bg-neutral text-gray-900 border-2 rounded-md border-blue-950 hover:text-opacity-70 hover:border-[#617086]",
    transparent:
      "bg-transparent text-gray-900 border-transparent hover:text-opacity-70",
    "transparent-outlined":
      "bg-transparent text-gray-900 rounded-md border-2 border-blue-950 hover:text-opacity-70 hover:border-[#617086]",
    "filled-white":
      "bg-[#FAFAFA] text-blue-950 border-[#FAFAFA] rounded-md  hover:bg-opacity-70 hover:text-opacity-70",
  };

  const disabledClasses = "opacity-50 cursor-not-allowed"; // Styling when disabled

  const commonClasses = `h-11 px-4 py-3 justify-center items-center inline-flex text-center font-medium 
  ${fullWidth ? "w-full" : "w-fit"} ${variantClasses[variant]} ${
    disabled ? disabledClasses : ""
  } ${className || ""}`;

  // Render content based on whether icon is provided and its position
  const content = (
    <>
      {icon && iconPosition === "left" && (
        <Image src={icon} alt="icon" width={20} height={20} className="mr-2" />
      )}
      {text}
      {icon && iconPosition === "right" && (
        <Image src={icon} alt="icon" width={20} height={20} className="ml-2" />
      )}
    </>
  );

  if (link) {
    return (
      <Link href={link} passHref>
        <button
          type={type}
          className={commonClasses}
          disabled={disabled} // Add disabled attribute here
          {...props}
          onClick={onClick}
        >
          {content}
        </button>
      </Link>
    );
  }

  return (
    <button
      id={id}
      type={type}
      className={commonClasses}
      disabled={disabled} // Add disabled attribute here
      {...props}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
