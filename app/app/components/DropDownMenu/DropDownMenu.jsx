import IconButton from "../Buttons/IconButton";
import AboutUsIcon from "@/app/public/svg/compass.svg";
import HelpIcon from "@/app/public/help-circle-outline.svg";
import AccountIcon from "@/app/public/svg/person.svg";
import Btn from "../Buttons/Btn";
import { useState } from "react";
import { useRouter } from "next/navigation";

function DropDownMenu({ onSignOut, buttonClasses, dropDownClass }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useRouter();
  function handleClick(path) {
    setIsMenuOpen((prev) => !prev);
    navigate.push(path);
  }
  return (
    <div className="z-20 relative">
      <div className="w-32">
        <Btn
          text="Menu"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          variant="filled-white"
          className={buttonClasses}
          fullWidth={true}
        />
      </div>
      {isMenuOpen && (
        <div
          className={`h-[215px] w-[170px] bg-[#FAFAFA] rounded-[5px] 
        flex flex-col  items-center gap-8 z-10 absolute
         left-1/2 -translate-x-1/2 mt-3
        ${dropDownClass}`}
        >
          <div className="flex flex-col items-start gap-3 mr-6 mt-6 ">
            <IconButton
              text="Account"
              icon={AccountIcon}
              className="w-20"
              onClick={() => handleClick("/profile/my-profile")}
            />
            <IconButton
              text="About Us"
              icon={AboutUsIcon}
              className="w-20"
              onClick={() => handleClick("/about-us")}
            />
            <IconButton
              text="Help"
              icon={HelpIcon}
              className="w-20"
              onClick={() => handleClick("/help")}
            />
          </div>
          <Btn
            variant="transparent-outlined"
            text="Sign Out"
            onClick={onSignOut}
          />
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
