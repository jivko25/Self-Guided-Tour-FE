"use client";
import Link from "next/link";
import Button from "../../../Buttons/Button";

export default function TabletConsumer() {
  return (
    <nav className="hidden tablet:block w-[834px] h-[404px] relative bg-neutral-50 rounded-bl-[5px] rounded-br-[5px]">
      <div className="w-[583px] h-9 left-[124px] top-[89px] absolute rounded-[5px] border border-stone-300">
        <div className="w-9 h-9 left-[547px] top-0 absolute bg-blue-950 rounded-tr-[5px] rounded-br-[5px]" />
        <div className="w-6 h-6 left-[555px] top-[6px] absolute" />
      </div>
      <Link
        href="/"
        className="left-[385px] top-[36px] absolute text-center text-gray-900 text-2xl font-medium font-['Inter Tight']"
      >
        LOGO
      </Link>
      <Link
        href="/explore"
        className="left-[125px] top-[171px] absolute text-center text-gray-900 text-base font-medium font-['Inter Tight']"
      >
        Explore
      </Link>
      <Link
        href="/create"
        className="left-[125px] top-[214px] absolute text-center text-gray-900 text-base font-medium font-['Inter Tight']"
      >
        Create
      </Link>
      <Link
        href="/my-tours"
        className="left-[125px] top-[257px] absolute text-center text-gray-900 text-base font-medium font-['Inter Tight']"
      >
        My Tours
      </Link>
      <div className="w-6 h-6 left-[786px] top-[24px] absolute" />
      <div className="w-[181px] px-4 py-3 left-[125px] top-[322px] absolute bg-neutral-50 rounded-[5px] border border-blue-950 justify-center items-center gap-2.5 inline-flex">
        <Link
          href="/menu"
          className="text-center text-gray-900 text-base font-medium font-['Inter Tight']"
        >
          Menu
        </Link>
      </div>
    </nav>
  );
}
