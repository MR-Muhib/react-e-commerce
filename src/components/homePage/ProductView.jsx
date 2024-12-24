import { Link } from "react-router-dom";

const ProductView = ({ product }) => {
  const { name, description, rate } = product;
  return (
    <div className=" border-gray-200 hover:shadow-md bg-[#f4f5f7]">
      <Link>
        <img
          src="https://img-new.cgtrader.com/items/2987022/ad162c5369/large/chear-folding-chair-3d-model-ad162c5369.jpg"
          alt={name || "No Image Available"}
        />
        <div className="p-4">
          <h3 className="text-xl font-bold">{name}</h3>
          <p className="text-gray-400">{description}</p>
          <span className="text-gray-600">{rate}</span>
        </div>
      </Link>
    </div>
  );
};

export default ProductView;
