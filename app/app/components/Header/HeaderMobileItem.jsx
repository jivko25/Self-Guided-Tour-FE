import Image from "next/image.js";

export default function HeaderMobileItem({
  icon,
  iconFocus,
  text,
  index,
  handleFocus,
  isFocused,
}) {
  return (
    <li
      className="flex flex-col items-center p-2"
      onClick={() => handleFocus(index)}
    >
      <Image
        src={isFocused ? iconFocus : icon}
        className="w-6 h-6 mb-1"
        alt={text}
        height={0}
        width={0}
      />
      <span className="text-center  text-[13px] font-normal">{text}</span>
    </li>
  );
}
