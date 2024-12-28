import { useEffect, useState } from "react";
import getProduct from "../../features/product-fetching/getProduct";

import ProductCard from "./ProductCard.jsx";
import AddCardBtn from "./add-to-card/AddCardBtn.jsx";

const ShopProducts = () => {
  // fetch products
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProduct({
          productUrl: "http://localhost:5000/products",
        });
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 px-5 gap-5 ">
      {products.map((product) => (
        <div
          key={product.id}
          className="relative group  shadow-md bg-[#f4f5f7] hover:shadow-lg transition ease-in-out"
        >
          {/* Product  card */}
          <ProductCard product={product} />

          {/* Add to Cart Button (Hidden by Default) */}
          <div className="absolute w-full flex h-full top-0 left-0 opacity-0 group-hover:opacity-90 transition ease-in-out duration-300">
            <AddCardBtn />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShopProducts;
