import Btn from "../Buttons/Btn.jsx";
export default function MobileMenuOverlayGuest() {
  return (
    <div className="flex flex-col justify-center items-center gap-4  mt-8 ">
      <Btn type="button" variant="transparent" text="Explore" link="/explore" />
      <Btn type="button" variant="transparent" text="Menu" />
      <div className="w-11/12 flex flex-col gap-2 my-8">
        <Btn fullWidth variant="outlined" text="Sign in" link="/sign-in" />
        <Btn fullWidth text="Create Account" link="/create-account" />
      </div>
    </div>
  );
}
