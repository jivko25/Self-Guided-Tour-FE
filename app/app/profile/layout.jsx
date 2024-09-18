"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileNavigation from "../components/Profile/Navigation/ProfileNavigation";
import { ProfileProvider } from "../context/profileContext";
const active = "border-b-[3px] border-[#E8B600] pb-4";
function ProfileLayout({ children }) {
  const pathname = usePathname();

  return (
    <ProfileProvider>
      <div className="flex flex-col  justify-start gap-7 h-[1720px] mx-52">
        <h1>Profile Page</h1>
        <ProfileNavigation />
        {children}
      </div>
    </ProfileProvider>
  );
}

export default ProfileLayout;
