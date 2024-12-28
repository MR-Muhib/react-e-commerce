import { useState } from "react";
import Logo from "./nav/Logo";
import NavIcons from "./nav/NavIcons";
import NavLinks from "./NavLinks";
import NavToggle from "./nav/NavToggle";

const Navbar = () => {
  return (
    <div className="container mx-auto w-full h-12 flex bg-white shadow-sm justify-between px-5">
      <Logo />

      <div className="hidden sm:block">
        <NavLinks />
      </div>

      <div className="hidden sm:block mt-1">
        <NavIcons />
      </div>

      <div className="block sm:hidden p-2 mt-1 ">
        <NavToggle />
      </div>
    </div>
  );
};

export default Navbar;
