import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderBtn from "../components/singleProduct/headerBtn";
import GetData from "../components/singleProduct/getData";
import GetImages from "../components/singleProduct/GetImages";

const SingleProductById = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:5000/products/${id}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error("Error fetching product:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="container mx-auto">
      <HeaderBtn />

      <div className="sm:flex gap-5 justify-between mx-auto">
        <GetImages product={product} />
        <GetData product={product} />
      </div>
    </div>
  );
};

export default SingleProductById;
