export default function getButtonClasses(variant) {
  switch (variant) {
    case "primary-short":
      return "w-20   bg-blue-950   text-white";
    case "primary-long":
      return "w-[400px]   bg-blue-950  text-white";
    case "secondary":
      return "w-72   bg-neutral-50 rounded-md border border-blue-950   text-gray-900  phone:w-80 tablet:w-[182px]";
    case "secondary-short":
      return "w-20   bg-neutral-50 ";
    case "secondary-outlined":
      return "bg-neutral-50 rounded-md border-2 border-blue-950";
    case "secondary-bg-color":
      return "w-32  bg-neutral-50 rounded-md text-gray-900";
    default:
      return "w-72   bg-blue-950  text-white  phone:w-80 tablet:w-[182px]";
  }
}
