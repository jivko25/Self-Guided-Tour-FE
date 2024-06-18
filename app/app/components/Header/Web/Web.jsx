// Web.jsx
import Link from "next/link";
import Button from "../../Buttons/Button";
import { logoutUser } from "@/app/actions/authActions";
import Btn from "../../Buttons/Btn.jsx";

export default function Web({ isAuthenticated }) {
  return (
    <nav className="flex items-center w-full h-full justify-around">
      <Link
        className="text-center text-gray-900 text-2xl font-medium font-['Inter Tight']"
        href="/"
      >
        LOGO
      </Link>

      <div className="flex items-center">
        <Btn
          type="button"
          variant="transparent"
          text="Explore"
          link="/explore"
        />
        {!isAuthenticated && (
          <Btn type="button" variant="transparent" text="Menu" link="/menu" />
        )}
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
              text="Explore"
              link="/my-tours"
            />
            <div className="w-32 px-4 py-3 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
              <Link
                href="/menu"
                className="text-center text-gray-900 text-base font-medium font-['Inter Tight']"
              >
                Menu
              </Link>
            </div>
            <div className="mx-2.5">
              <Button
                variant="secondary-outlined"
                text="Logout"
                type={"submit"}
                onClick={logoutUser}
              />
            </div>
          </>
        )}

        {!isAuthenticated && (
          <>
            <div className="mx-2.5">
              <Btn
                type="button"
                variant="outlined"
                text="Sign in"
                link="/sign-in"
              />
            </div>
            <div className="mx-2.5">
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
