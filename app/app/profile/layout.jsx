"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ProfileNavigation from "../components/Profile/Navigation/ProfileNavigation";
const active = "border-b-[3px] border-[#E8B600] pb-4";
function ProfileLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col  justify-start gap-7">
      <h1>Profile Page</h1>
      <ProfileNavigation />
      {children}
    </div>
  );
}

export default ProfileLayout;
