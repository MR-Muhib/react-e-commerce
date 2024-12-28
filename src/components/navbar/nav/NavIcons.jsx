// React icons
import { CiUser, CiHeart, CiShoppingCart } from "react-icons/ci";
import Searchbar from "./SearchBar";
import { Link } from "react-router-dom";

const NavIcons = () => {
  return (
    <div className="flex items-center gap-3 ">
      <Link href="/login">
        <button className="p-2">
          <CiUser className="text-xl" />
        </button>
      </Link>

      {/* import Searchbar component */}
      <Searchbar />

      <Link href="/favorites">
        <button className="p-2">
          <CiHeart className="text-xl" />
        </button>
      </Link>

      <Link href="/cart">
        <button className="p-2">
          <CiShoppingCart className="text-xl" />
          {/* <span className="text-xs text-gray-500">2</span> */}
        </button>
      </Link>
    </div>
  );
};

export default NavIcons;
