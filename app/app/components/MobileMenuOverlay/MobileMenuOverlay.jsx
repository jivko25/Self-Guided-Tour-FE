import Image from "next/image.js";
import CloseIcon from "../../public/svg/close.svg";
import Link from "next/link.js";
import MobileMenuOverlayGuest from "./MobileMenuOverlayGuest.jsx";
import MobileMenuOverlayUser from "./MobileMenuOverlayUser.jsx";

export default function MobileMenuOverlay({
  menuOverlayVisible,
  isAuthenticated,
  handleLogout
}) {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify- items-end z-50 ">
      <div className="relative w-full h-max   bg-neutral-50 rounded-tl-[5px] rounded-tr-[5px] phone:mx-4">
        <div
          className="absolute top-[12px] right-[12px] cursor-pointer"
          onClick={menuOverlayVisible}
        >
          <Image src={CloseIcon} width={24} height={24} alt="close" />
        </div>
        <Link
          href="/"
          className="flex justify-center items-center text-center text-gray-900 font-medium text-2xl p-6"
          onClick={menuOverlayVisible}
        >
          LOGO
        </Link>
        <div className="flex flex-col phone:mb-32 ">
          {isAuthenticated ? (
            <MobileMenuOverlayUser menuOverlayVisible={menuOverlayVisible} handleLogout={handleLogout}/>
          ) : (
            <MobileMenuOverlayGuest menuOverlayVisible={menuOverlayVisible}/>
          )}
        </div>
      </div>
    </div>
  );
}
