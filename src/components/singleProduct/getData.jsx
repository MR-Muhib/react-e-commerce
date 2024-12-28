import ProductSizeBtn from "./product/ProductSizeBtn";
import ProductInfo from "./product/ProductInfo";
import ProductColor from "./product/ProductColor";
import AddToCartButton from "./AddtoCartBtn";
import SocialMedia from "./product/SocialMedia";

const GetData = ({ product }) => {
  if (!product) {
    return <div>Loading...</div>; // Handle undefined product gracefully.
  }

  return (
    // <div className="flex w-[50%]"></div>
    <div className="flex p-5">
      <div className="pr-10 pt-2">
        {/* product information */}
        <ProductInfo product={product} />

        {/* Product size  */}
        <ProductSizeBtn />

        {/* Add color buttons */}
        <ProductColor />

        {/* add to cart button */}
        <AddToCartButton />

        {/* social media icons */}
        <SocialMedia />

        {/* related products */}

        {/* dynamic related products */}

        {/* buy now button */}
      </div>
    </div>
  );
};

export default GetData;
