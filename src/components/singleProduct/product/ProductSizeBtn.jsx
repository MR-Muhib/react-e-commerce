import React from "react";

const ProductSizeBtn = () => {
  return (
    <>
      <p className="text-gray-500">Size</p>
      <div className="flex gap-5">
        <p className="bg-[#b88e2f] text-white py-2 px-4 mr-2 rounded-md cursor-pointer">
          L
        </p>
        <p className="bg-[#b88e2f] text-white py-2 px-2 mr-2 rounded-md cursor-pointer">
          XL
        </p>
        <p className="bg-[#b88e2f] text-white py-2 px-2 mr-2 rounded-md cursor-pointer">
          XS
        </p>
      </div>
    </>
  );
};

export default ProductSizeBtn;
