// import all components
import IntroduceApplication from "../components/applicationInfo/IntroduceApplication";
import PageExchangeButtons from "../components/applicationInfo/PageExchangeButtons";
import ShopBanner from "../components/shopPage/ShopBanner";
import ShopProducts from "../components/shopPage/ShopProducts";

const Shop = () => {
  return (
    <div className="container mx-auto justify-center">
      <ShopBanner />

      <ShopProducts />

      {/* page exchange button */}
      <PageExchangeButtons />

      {/* product quality and over view  */}
      <IntroduceApplication />
    </div>
  );
};

export default Shop;
