"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogOut from "@/app/public/svg/log-out.svg";
import LogOutButton from "../../Buttons/IconButton";
const active = "border-b-[5px] border-[#E8B600] pb-4";
const hover =
  "hover:translate-x-2 transform transition-transform duration-500 ";
function ProfileNavigation() {
  const pathname = usePathname();
  return (
    <div
      className="flex text-nowrap
     web:mt-16 
     tablet:gap-36 
      smallPhone:mt-40 smallPhone:text-sm  "
    >
      <ul
        className="flex tablet:gap-24 border-b-2 border-[#D1D0D8] pb-4
       web:w-[1210px] 
       tablet:w-[800px]
       phone:w-[500px]
       smallPhone:w-[300px] smallPhone:gap-8 "
      >
        <li className={`${hover}`}>
          <Link
            href="/profile/my-profile"
            className={`${
              pathname === "/profile/my-profile" ? active : "${hover}"
            } `}
          >
            My profile
          </Link>
        </li>
        <li className={`${hover}`}>
          <Link
            href="/profile/my-library"
            className={pathname === "/profile/my-library" ? active : ""}
          >
            My Library
          </Link>
        </li>
        <li className={`${hover}`}>
          <Link
            href="/profile/my-balance"
            className={pathname === "/profile/my-balance" ? active : ""}
          >
            My Balance
          </Link>
        </li>
        <li className={`${hover} `}>
          <Link
            href="/profile/settings"
            className={`${
              pathname === "/profile/settings" ? active : ""
            } w-[77px]`}
          >
            Settings
          </Link>
        </li>
      </ul>
      <LogOutButton
        text="Sign Out"
        icon={LogOut}
        className="hover:translate-x-2 transform transition-transform duration-500"
      />
    </div>
  );
}

export default ProfileNavigation;
