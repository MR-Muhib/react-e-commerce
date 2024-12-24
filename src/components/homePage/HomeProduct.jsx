import { useEffect, useState } from "react";

import ProductView from "./ProductView";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/products?_limit=9");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className=" bg-white">
      <h2 className="text-2xl font-bold text-gray-800 text-center mb-3">
        Our Products
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
        {products.map((product) => (
          <ProductView key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
