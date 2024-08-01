import Btn from "../Buttons/Btn.jsx";
export default function MobileMenuOverlayUser({menuOverlayVisible, handleLogout}) {
  const logout = () => {
    if (handleLogout) {
      handleLogout();
    }
  }
  return (
    <div className="flex flex-col justify-center items-center gap-4  mt-8" onClick={menuOverlayVisible}>
      <Btn type="button" variant="transparent" text="Explore" link="/explore?page=1" onClick={menuOverlayVisible}/>
      <Btn type="button" variant="transparent" text="Create" link="/create" onClick={menuOverlayVisible}/>
      <Btn
        type="button"
        variant="transparent"
        text="My Tours"
        link="/my-tours"
      />
            <Btn
                variant="secondary-outlined"
                text="Logout"
                type={"submit"}
                onClick={logout}
              />
      <div className="w-11/12 flex flex-col gap-2 my-8">
        <Btn fullWidth text="Menu" link="/menu" onClick={menuOverlayVisible}/>
      </div>
    </div>
  );
}
