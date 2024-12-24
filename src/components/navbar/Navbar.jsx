import Logo from "./Logo";
import NavIcons from "./NavIcons";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <div className="container mx-auto flex w-full sticky top-0 z-20 bg-white shadow-sm justify-between px-5">
      <Logo />

      <NavLinks />

      <NavIcons />
    </div>
  );
};

export default Navbar;
