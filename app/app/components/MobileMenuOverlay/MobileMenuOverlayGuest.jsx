import Btn from "../Buttons/Btn.jsx";
export default function MobileMenuOverlayGuest({menuOverlayVisible}) {
  return (
    <div className="flex flex-col justify-center items-center gap-4  mt-8">
      <Btn type="button" variant="transparent" text="Explore" link="/explore?page=1&sort=newest" onClick={menuOverlayVisible}/>
      <Btn type="button" variant="transparent" text="Menu" onClick={menuOverlayVisible}/>
      <div className="w-11/12 flex flex-col gap-2 my-8">
        <Btn fullWidth variant="outlined" text="Sign in" link="/sign-in" onClick={menuOverlayVisible}/>
        <Btn fullWidth text="Create Account" link="/create-account" onClick={menuOverlayVisible}/>
      </div>
    </div>
  );
}
