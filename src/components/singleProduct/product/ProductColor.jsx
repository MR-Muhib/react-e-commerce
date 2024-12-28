import React from "react";

const ProductColor = () => {
  return (
    <>
      <p className="text-gray-500 mt-5">Color</p>
      <div className="py-2 flex gap-5">
        <div className="w-6 h-6 rounded-full bg-[#816dfa]"></div>
        <div className="w-6 h-6 rounded-full bg-black"></div>
        <div className="w-6 h-6 rounded-full bg-[#d88e2f]"></div>
      </div>
    </>
  );
};

export default ProductColor;
