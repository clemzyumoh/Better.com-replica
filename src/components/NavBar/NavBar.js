"use client";

//import NavBar1 from "./NavBar1";
//import NavBar111 from "./NavBar111";
import NavBar11 from "./NavBar11";
import NavBar2 from "./NavBar2";
import { useMediaQuery } from "@react-hook/media-query";

const Nav = () => {
  const ResponsiveNavbar = () => {
    const isMobile = useMediaQuery("(max-width: 980px)");

    return isMobile ? <NavBar2 /> : <NavBar11 />;
  };
  return (
    <>
      <ResponsiveNavbar />
    </>
  );
};

export default Nav



