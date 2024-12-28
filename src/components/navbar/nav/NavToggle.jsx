import { useState } from "react";

// Import react icons
import { LuAlignJustify } from "react-icons/lu";
import NavLinks from "../NavLinks";
import NavIcons from "./NavIcons";

const NavToggle = () => {
  // State to track toggle
  const [toggle, setToggle] = useState(false);

  // Function to handle toggle click
  const handleToggle = () => {
    setToggle((prevToggle) => !prevToggle); // Toggle the state
  };

  return (
    <div>
      <span className="text-xl cursor-pointer" onClick={handleToggle}>
        <LuAlignJustify />
      </span>

      {/* Conditionally render NavLinks and NavIcons based on toggle state */}
      {toggle && (
        <>
          <NavLinks />
          <NavIcons />
        </>
      )}
    </div>
  );
};

export default NavToggle;
