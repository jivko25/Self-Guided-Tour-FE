"use client";
import Web from "./Web/Web";
import Tablet from "./Tablet/Tablet";
import HeaderMobile from "./HeaderMobile.jsx";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/authContext";
import { usePathname, useRouter } from "next/navigation";
// import { getUserSession, logoutUser, validateToken } from "@/app/actions/authActions";

export default function Header() {
  const { session, setSession, logoutUser, getUserSession, validateToken } = useAuth();
  const [headerVisible, setHeaderVisible] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  
  useEffect(() => {
    // validateToken().then(data => {
    //   if (data?.error) {
    //     console.log(data.error);
    //     router.push('/');
    //   }
    // });

    getUserSession().then(result => {
      setSession(result);
    });
    
    // handle mobile menu visibility
    if (pathname === '/sign-in' || pathname === '/create-account') {
      setHeaderVisible(true);
    } else {
      setHeaderVisible(false);
    }
  }, [setSession, pathname, setHeaderVisible, getUserSession, validateToken]);

  const handleLogout = async () => {
    const result = await logoutUser();

    if (result.error) {
      console.log(result.error);
    } else {
      setSession(false);
    }
  }

  return (
    <>
      <header className="hidden web:flex w-full  items-center justify-center h-100px py-9">
        <Web isAuthenticated={session} handleLogout={handleLogout}/>
      </header>

      <header className="hidden tablet:flex web:hidden items-center justify-center w-full h-100px">
        <Tablet isAuthenticated={session} />
      </header>

      <header className="tablet:hidden z-50" hidden={headerVisible}>
        <HeaderMobile isAuthenticated={session} />
      </header>
    </>
  );
}
