import getButtonClasses from "@/utils/getButtonClasses.js";
export default function Button({ variant, text }) {
  const btnType = getButtonClasses(variant);
  return (
    <button
      type="button"
      className={`${btnType} h-11 px-4 py-3 rounded-md justify-center items-center gap-2.5 inline-flex text-center text-base font-medium`}
    >
      {text}
    </button>
  );
}
