// Web.jsx
import Link from "next/link";
import Button from "../../Buttons/Button";
import { logoutUser } from "@/app/actions/authActions";

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
        <Link
          className="text-center mx-5 text-gray-900 text-base font-medium font-['Inter Tight']"
          href="/explore"
        >
          Explore
        </Link>
        {!isAuthenticated && <Link
                href="/menu"
                className="text-center text-gray-900 text-base font-medium font-['Inter Tight']"
              >
                Menu
        </Link>}
        {isAuthenticated && (
          <>
            <Link
              className="mx-5 text-center text-gray-900 text-base font-medium font-['Inter Tight']"
              href="/create"
            >
              Create
            </Link>
            <Link
              className="mx-5 text-center text-gray-900 text-base font-medium font-['Inter Tight']"
              href="/my-tours"
            >
              My Tours
            </Link>
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
                onClick={
                  logoutUser
                }
              />
            </div>
          </>
        )}

        {!isAuthenticated && (
          <>
            <div className="mx-2.5">
              <Link href="/sign-in">
                <Button
                  variant="secondary-outlined"
                  text="Sign In"
                  type={"button"}
                />
              </Link>
            </div>
            <div className="mx-2.5">
              <Link href="/create-account">
                <Button text="Create Account" type={"button"} />
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
