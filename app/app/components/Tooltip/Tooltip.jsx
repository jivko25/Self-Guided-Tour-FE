import Image from "next/image.js";

export default function Tooltip({
  icon,
  iconAltText,
  text,
  type = "success",
}) {
  // Define styles based on the type prop
  const bgColor = type === "warning" ? "bg-red-500" : "bg-green-500";
  const textColor = type === "warning" ? "text-red-100" : "text-gray-100";

  return (
    <div>
      <span className="group relative">
        <div className="absolute bottom-[calc(100%+0.5rem)] left-[50%] -translate-x-[50%] hidden group-hover:block w-auto">
          <div
            className={`bottom-full right-0 rounded-full ${bgColor} px-2 py-1 text-sm ${textColor} font-semibold whitespace-nowrap`}
          >
            {text}
            <svg
              className="absolute left-0 top-full h-2 w-full text-black"
              x="0px"
              y="0px"
              viewBox="0 0 255 255"
              xmlSpace="preserve"
            >
              <polygon
                className="fill-current"
                points="0,0 127.5,127.5 255,0"
              />
            </svg>
          </div>
        </div>
        <Image
          src={icon}
          width={24}
          height={24}
          alt={iconAltText || "image"}
        />
      </span>
    </div>
  );
}
