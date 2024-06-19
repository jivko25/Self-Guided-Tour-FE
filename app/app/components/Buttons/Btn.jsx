import Link from "next/link.js";
export default function Btn({
  variant = "filled",
  fullWidth = false,
  type,
  text,
  link,
  onClick,
  ...props
}) {
  const variantClasses = {
    filled: "bg-blue-950 text-white border-2 rounded-md border-transparent",
    outlined: "bg-neutral text-gray-900 border-2 rounded-md border-blue-950 ",
    transparent: "bg-transparent text-gray-900 border-transparent ",
  };

  const commonClasses = `h-11 px-4 py-3 justify-center items-center inline-flex text-center font-medium ${
    fullWidth ? "w-full" : "w-fit"
  } ${variantClasses[variant]}`;

  if (link) {
    return (
      <Link href={link} passHref>
        <button
          type={type}
          className={commonClasses}
          {...props}
          onClick={onClick}
        >
          {text}
        </button>
      </Link>
    );
  }

  return (
    <button type={type} className={commonClasses} {...props} onClick={onClick}>
      {text}
    </button>
  );
}
