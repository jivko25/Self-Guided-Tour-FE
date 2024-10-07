import Btn from "../Buttons/Btn.jsx";
import DropDownMenu from "../DropDownMenu/DropDownMenu.jsx";
export default function MobileMenuOverlayUser({
  menuOverlayVisible,
  handleLogout,
}) {
  return (
    <div
      className="flex flex-col justify-center items-center gap-4  mt-8"
      //  onClick={menuOverlayVisible}
    >
      <Btn
        type="button"
        variant="transparent"
        text="Explore"
        link="/explore?page=1"
        onClick={menuOverlayVisible}
      />
      <Btn
        type="button"
        variant="transparent"
        text="Create"
        link="/create"
        onClick={menuOverlayVisible}
      />
      <Btn
        type="button"
        variant="transparent"
        text="My Tours"
        link="/profile/my-library"
        onClick={menuOverlayVisible}
      />
      <div className="w-11/12 justify-center items-center flex flex-col gap-2 my-8">
        {/* <Btn
          fullWidth
          variant="outlined"
          text="Menu"
          link="/menu"
          onClick={menuOverlayVisible}
        /> */}
        <DropDownMenu
          buttonClasses=" border-blue-950 border-2 w-full"
          dropDownClass="border-blue-950 border-2 text-blue-950 transform -translate-y-[18rem] "
          buttonWidth="320px"
          onClick={menuOverlayVisible}
          onSignOut={handleLogout}
        />
      </div>
    </div>
  );
}
