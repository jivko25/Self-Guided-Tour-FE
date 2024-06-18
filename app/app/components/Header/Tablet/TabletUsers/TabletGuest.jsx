"use client";
import Link from "next/link";
import Button from "../../../Buttons/Button";

export default function TabletGuest() {
  return (
    <nav className="flex flex-col w-full bg-neutral-50 h-[404px]">
      <Link
        href="/"
        className="flex justify-center items-center text-center text-gray-900 font-medium text-2xl p-10"
      >
        LOGO
      </Link>

      <div className="flex justify-center items-center">
        <div className="flex justify-between items-center w-full tablet:max-w-[583px]">
          <input className="rounded-bl-[5px] rounded-tl-[5px] border border-stone-300 bg-neutral-50/opacity-80 w-full h-[36px] tablet:max-w-[547px]" type="text" />
          <button className="cursor-pointer bg-blue-950 rounded-tr-[5px] rounded-br-[5px] w-full h-[36px] tablet:max-w-[36px]">
            p
          </button>
        </div>
      </div>

      <Link href="/menu" className="">
        Menu
      </Link>
      <Link href="/explore" className="">
        Explore
      </Link>
      <div className="">
        <Link href="/sign-in" className="">
          Sign In
        </Link>
        <Link href="/create-account" className="">
          Create Account
        </Link>
      </div>
    </nav>
  );
}
