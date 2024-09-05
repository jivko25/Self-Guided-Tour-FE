"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Btn from "../../Buttons/Btn";
import LogOut from "@/app/public/svg/log-out.svg";
import Image from "next/image";
import LogOutButton from "../../Buttons/IconButton";
const active = "border-b-[5px] border-[#E8B600] pb-4";
function ProfileNavigation() {
  const pathname = usePathname();
  return (
    <div className="flex gap-[150px]">
      <ul className="flex gap-5 border-b-2 border-[#D1D0D8] pb-4 w-[1210px]">
        <li>
          <Link
            href="/profile/my-profile"
            className={pathname === "/profile/my-profile" ? active : ""}
          >
            My profile
          </Link>
        </li>
        <li>
          <Link
            href="/profile/my-library"
            className={pathname === "/profile/my-library" ? active : ""}
          >
            My Library
          </Link>
        </li>
        <li>
          <Link
            href="/profile/my-balance"
            className={pathname === "/profile/my-balance" ? active : ""}
          >
            My Balance
          </Link>
        </li>
        <li>
          <Link
            href="/profile/settings"
            className={pathname === "/profile/settings" ? active : ""}
          >
            Settings
          </Link>
        </li>
      </ul>
      <LogOutButton text="Sign Out" icon={LogOut} />
      {/* <div className="flex">
        <Image src={LogOut} alt="Log Out" />
        <Btn variant="transperant" text="Sign Out" />
      </div> */}
    </div>
  );
}

export default ProfileNavigation;
