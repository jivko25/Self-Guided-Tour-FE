import { useEffect, useState } from "react";
import Left from "@/app/public/svg/left.svg";
import Right from "@/app/public/svg/right.svg";
import Image from "next/image";

export default function ButtonRound({
  type = "button",
  onclick,
  classes,
  direction = "",
}) {
  const [svg, setSvg] = useState(null);
  const [alt, setAlt] = useState("");

  useEffect(() => {
    if (direction == "left") {
      setSvg(Left);
      setAlt("Previous page");
    } else if (direction == "right") {
      setSvg(Right);
      setAlt("Next page");
    }
  }, [direction, Left, Right, setSvg, setAlt]);

  return (
    <button
      className={`w-[40px] h-[40px] rounded-full bg-[#E8B600] hover:opacity-60 ${classes}`}
      type={type}
      onClick={onclick}
    >
      {svg && (
        <Image
          className="my-0 mx-auto w-[30px] h-[30px]"
          src={svg}
          alt={alt}
          style={{ width: "auto", height: "auto" }}
        />
      )}
    </button>
  );
}
