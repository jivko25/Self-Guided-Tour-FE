import { Inter } from "next/font/google";
import "./styles/globals.css";

import Header from "./components/Header/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import { AuthProvider } from "./context/authContext";
import Footer from "./components/Footer/Footer";
import { PopupProvider } from "./context/popupContext";
import { CreateTourProvider } from "./context/createTourContext";
import { Suspense } from "react";

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-neutral-50 flex flex-col items-center min-h-screen`}
      >
        <div id="createModal" />
        <AuthProvider>
          <PopupProvider>
            <CreateTourProvider>
              <Header />
              {children}
              <Footer />
            </CreateTourProvider>
          </PopupProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
