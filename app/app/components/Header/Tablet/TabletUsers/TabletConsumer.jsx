"use client";
import Link from "next/link";
import Button from "../../../Buttons/Button";
import Btn from "@/app/components/Buttons/Btn.jsx";

export default function TabletConsumer() {
  return (
    <nav className="flex flex-col w-full bg-neutral-50 h-[404px]">
      <Link
        href="/"
        className="flex justify-center items-center text-center text-gray-900 font-medium text-2xl p-6"
      >
        LOGO
      </Link>

      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-full tablet:max-w-[583px]">
          <input
            className="rounded-bl-[5px] rounded-tl-[5px] border border-stone-300 bg-neutral-50 w-full h-[36px] tablet:max-w-[547px]"
            type="text"
          />
          <button className="cursor-pointer bg-blue-950 rounded-tr-[5px] rounded-br-[5px] w-full h-[36px] tablet:max-w-[36px]">
            p
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center w-full mt-[30px]">
        <div className="flex flex-col items-start w-full tablet:max-w-[610px] ">
          <Btn
            type="button"
            variant="transparent"
            text="Explore"
            link="/explore"
          />
          <Btn
            type="button"
            variant="transparent"
            text="Create"
            link="/create"
          />
          <Btn
            type="button"
            variant="transparent"
            text="My tours"
            link="/my-tours"
          />
          <div className="flex mt-[30px]">
            <div className="mx-2.5">
              <Btn
                type="button"
                variant="outlined"
                text="Menu"
                link="/menu"
                width="w-[182px]"
              />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
