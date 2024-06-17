import getButtonClasses from "@/utils/getButtonClasses.js";
export default function Button({ variant, text, type, onClick }) {
  const handleClick = async () => {
    if (onClick) {
      await onClick();
    }
  }
  const btnType = getButtonClasses(variant);
  return (
    <button
      type={type}
      className={`${btnType} h-11 px-4 py-3 rounded-md justify-center items-center gap-2.5 inline-flex text-center text-base font-medium`}
      onClick={handleClick}
    >
      {text}
    </button>
  );
}
