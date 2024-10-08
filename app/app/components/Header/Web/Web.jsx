"use client";
import Link from "next/link";
import Button from "../../Buttons/Button";
import Btn from "../../Buttons/Btn.jsx";
import { usePathname } from "next/navigation";
import Image from "next/image";
import LogoColored from "@/app/public/svg/logo-colored.svg";
import DropDownMenu from "../../DropDownMenu/DropDownMenu";

export default function Web({ isAuthenticated, handleLogout }) {
  const pathname = usePathname();

  const logout = () => {
    if (handleLogout) {
      handleLogout();
    }
  };
  const dropDownClass = pathname === "/" ? "" : "border-2 border-blue-950";
  const signInButtonClass =
    pathname === "/"
      ? "h-11 px-4 py-3 justify-center items-center flex text-center font-medium text-gray-900 rounded-md border-2 border-neutral-50 bg-neutral-50 hover:border-neutral-50"
      : "h-11 px-4 py-3 justify-center items-center flex text-center font-medium bg-neutral text-gray-900 border-2 rounded-md border-blue-950";

  return (
    <nav className="flex items-center w-full h-full justify-around z-10">
      <Link
        className="text-center text-gray-900 text-2xl font-medium font-['Inter Tight']"
        href="/"
      >
        <Image
          src={LogoColored}
          width={133}
          style={{ height: "auto" }}
          alt="Logo"
          priority={true}
        />
      </Link>

      <div className="flex items-center">
        <Btn
          type="button"
          variant="transparent"
          text="Explore"
          link="/explore?page=1&sort=newest"
        />
        {isAuthenticated && (
          <>
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
              link="/profile/my-library"
            />
            <div className="ml-[20px]">
              <DropDownMenu
                buttonClasses={signInButtonClass}
                onSignOut={logout}
                dropDownClass={dropDownClass}
                session={isAuthenticated}
              />
            </div>
          </>
        )}

        {!isAuthenticated && (
          <>
            <div className="ml-[30px] mx-1">
              <Btn
                type="button"
                variant="outlined"
                text="Sign in"
                link="/sign-in"
                className={signInButtonClass}
              />
            </div>
            <div className="mx-1">
              <Btn
                type="button"
                variant="filled"
                text="Create Account"
                link="/create-account"
              />
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
