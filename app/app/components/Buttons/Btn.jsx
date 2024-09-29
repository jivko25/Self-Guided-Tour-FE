import Link from "next/link";
import Image from "next/image";

export default function Btn({
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
    filled: "bg-blue-950 text-white border-2 rounded-md border-transparent hover:bg-opacity-70",
    outlined: "bg-neutral text-gray-900 border-2 rounded-md border-blue-950 hover:text-opacity-70 hover:border-[#617086]",
    transparent: "bg-transparent text-gray-900 border-transparent hover:text-opacity-70",
    "transparent-outlined":
      "bg-transparent text-gray-900 rounded-md border-2 border-blue-950 hover:text-opacity-70 hover:border-[#617086]",
  };

  const commonClasses = `h-11 px-4 py-3 justify-center items-center inline-flex text-center font-medium 
  ${fullWidth ? "w-full" : "w-fit"} ${variantClasses[variant]} ${
    className || ""
  }`;

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
      {...props}
      onClick={onClick}
    >
      {content}
    </button>
  );
}
