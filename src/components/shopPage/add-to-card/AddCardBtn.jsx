// import react icons
import { FaShareAlt } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import Button from "./Button";

const compareProducts = [
  {
    id: 1,
    icons: <FaShareAlt />,
    compareName: "Share",
  },
  {
    id: 2,
    icons: <MdCompareArrows />,
    compareName: "Compare",
  },
  {
    id: 3,
    icons: <CiHeart />,
    compareName: "Like",
  },
];

// component to add product to cart and other actions  like share, compare, and like
const AddCardBtn = () => {
  return (
    <div className="flex items-center justify-center w-full bg-[#646463] ">
      <div className="text-center ">
        {/* Add card button */}
        <Button />

        {/* compare icons */}
        <div className="flex gap-2 text-sm mt-4 justify-center">
          {compareProducts.map((compare) => (
            <ProductComponent
              key={compare.id}
              icons={compare.icons}
              compareName={compare.compareName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddCardBtn;

// usage in ProductCard component
const ProductComponent = ({ icons, compareName }) => {
  return (
    <div className="flex items-center gap-1 text-white font-semibold">
      <span>{icons}</span>
      <p className="text-white">{compareName}</p>
    </div>
  );
};
