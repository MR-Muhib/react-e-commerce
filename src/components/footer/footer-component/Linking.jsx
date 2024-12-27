import { Link } from "react-router-dom";

const Linking = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold text-[#9F9F9F] mb-8">Links</h2>
      <ul className="mt-4 space-y-2">
        <li>
          <Link href="/" className="text-gray-600 hover:text-gray-800">
            Home
          </Link>
        </li>
        <li>
          <Link href="/shop" className="text-gray-600 hover:text-gray-800">
            Shop
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-gray-600 hover:text-gray-800">
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Linking;
