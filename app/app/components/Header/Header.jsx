"use client";

import { useBreakpoint } from 'your-breakpoint-library'; // Import the hook to detect screen size

import Web from "./Web/Web";
import TabletConsumer from "./Tablet/TabletConsumer";
import TabletGuest from "./Tablet/TabletGuest";

export default function Header({ isAuthenticated }) {
  const screenSize = useBreakpoint(); // Assume you have a hook to detect screen size

  return (
    <>
      {screenSize === 'web' && <Web />}
      {screenSize === 'tablet' && <TabletConsumer />}
      {screenSize === 'phone' && <TabletGuest />}
    </>
  );
}

