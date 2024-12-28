import React from "react";

const ProductInfo = ({ product }) => {
  return (
    <>
      <h1 className="text-2xl font-bold uppercase">{product.name}</h1>

      <p className="font-semibold text-xl text-gray-500 py-1">
        Price: ${product.price}
      </p>
      <p className="text-2xl text-yellow-500">* * * *</p>

      <p className="text-justify pb-4">{product.description}</p>
    </>
  );
};

export default ProductInfo;
