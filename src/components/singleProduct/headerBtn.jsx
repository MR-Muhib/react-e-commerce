// react icons
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";

const HeaderBtn = () => {
  return (
    <div className="bg-[#f9f1e7] flex gap-6 w-full h-20 items-center px-4">
      <div className="flex text-gray-500 border-r-2 border-black pr-4">
        <div className="flex justify-center gap-2  mr-5">
          <Link href="/">Home</Link>
          <MdOutlineKeyboardArrowRight className="text-2xl text-black" />
        </div>

        <div className="flex justify-center gap-2  mr-5">
          <Link href="/shop">Shop</Link>
          <MdOutlineKeyboardArrowRight className="text-2xl text-black" />
        </div>
      </div>

      <p className="">Asgaard sofa</p>
    </div>
  );
};

export default HeaderBtn;
