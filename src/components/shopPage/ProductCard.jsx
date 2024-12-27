const ProductCard = ({ product }) => {
  const { name, description, rate } = product;

  return (
    <div>
      <img
        src="data:image/jpeg;base64,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"
        alt={name || "Product image"}
        width={200}
        height={150}
        className="object-cover w-full"
      />

      <div className="p-4">
        <h2 className="text-lg font-bold">{name || "Unnamed Product"}</h2>
        <p className="text-gray-500">
          {description || "No description available."}
        </p>
        <p className="text-black font-semibold mt-2">Price: ${rate}</p>
      </div>
    </div>
  );
};

export default ProductCard;
