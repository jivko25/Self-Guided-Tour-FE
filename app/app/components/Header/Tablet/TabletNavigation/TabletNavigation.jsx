"use client";

import Link from "next/link";
import Btn from "../../../Buttons/Btn";
import Search from "@/app/components/Search/Search";
import Image from "next/image";
import LogoColored from "@/app/public/svg/logo-colored.svg";

const TabletNavigation = ({ isAuthenticated, handleNavClose }) => {
  const handleClick = () => {
    if (handleNavClose) {
      handleNavClose();
    }
  };

  return (
    <nav className="absolute flex flex-col w-full bg-neutral-50 h-[404px]">
      <Link
        href="/"
        className="flex justify-center items-center text-center text-gray-900 font-medium text-2xl p-6"
      >
        <Image
          src={LogoColored}
          width={83}
          style={{ height: "auto" }}
          alt="Logo"
          priority={true}
        />
      </Link>

      <Search
        variant="tabletNavigationSearch"
        handleNavClose={handleNavClose}
      />

      <div className="flex items-center justify-center w-full mt-[30px]">
        <div className="flex flex-col items-start w-full tablet:max-w-[610px] ">
          <Btn
            type="button"
            variant="transparent"
            text="Explore"
            link="/explore?page=1&sort=newest"
            onClick={handleClick}
          />

          {isAuthenticated ? (
            <>
              <Btn
                type="button"
                variant="transparent"
                text="Create"
                link="/create"
                onClick={handleClick}
              />
              <Btn
                type="button"
                variant="transparent"
                text="My tours"
                link="/my-tours"
                onClick={handleClick}
              />
              <div className="flex mt-[30px]">
                <div className="mx-2.5 w-[182px]">
                  <Btn
                    type="button"
                    variant="outlined"
                    text="Menu"
                    link="/menu"
                    onClick={handleClick}
                  />
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="flex mt-[30px]">
                <div className="mx-2.5 w-[182px]">
                  <Btn
                    type="button"
                    variant="outlined"
                    text="Sign in"
                    link="/sign-in"
                    fullWidth
                    onClick={handleClick}
                  />
                </div>
                <div className="mx-2.5 w-[182px]">
                  <Btn
                    type="button"
                    variant="filled"
                    text="Create Account"
                    link="/create-account"
                    width="w-[182px]"
                    fullWidth
                    onClick={handleClick}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default TabletNavigation;
