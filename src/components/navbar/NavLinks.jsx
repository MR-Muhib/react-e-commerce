import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav className="p-3">
      <ul className="flex gap-5">
        <li>
          <Link href="/" className="hover:text-gray-700">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="hover:text-gray-700">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-gray-700">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-gray-700">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
