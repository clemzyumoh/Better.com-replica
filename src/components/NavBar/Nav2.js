"use client";


import { useMediaQuery } from "@react-hook/media-query";
//import NavBar11 from "./NavBar11";
import NavBar1 from "./NavBar1";
import NavBar111 from "./NavBar111";

 const Nav2 = () => {
  const ResponsiveNavbar = () => {
    const isMobile = useMediaQuery("(max-width: 980px)");

    return isMobile ? <NavBar1/> : <NavBar111 />;
  };
  return (
    <>
      <ResponsiveNavbar />
    </>
  );
};


export default Nav2;