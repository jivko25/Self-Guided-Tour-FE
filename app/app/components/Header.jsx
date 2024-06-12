import Link from "next/link";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-center h-100px py-9">
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

          <div className="px-4 py-3 mx-5 bg-neutral-50 rounded-[5px] border-2 border-blue-950 justify-center items-center gap-2.5 inline-flex">
            <Link
              href="/sign-in"
              className="text-center text-gray-900 text-base font-medium font-['Inter Tight']"
            >
              Sign In
            </Link>
          </div>

          <div className="px-4 py-3 bg-blue-950 rounded-[5px] justify-center items-center gap-2.5 inline-flex">
            <Link
              href="/create-account"
              className="text-center text-white text-base font-medium font-['Inter Tight']"
            >
              Create Account
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
