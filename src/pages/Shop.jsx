import PageExchangeButtons from "../components/applicationInfo/PageExchangeButtons";
import ShopBanner from "../components/shopPage/ShopBanner";
import ShopProducts from "../components/shopPage/ShopProducts";

const Shop = () => {
  return (
    <div className="container mx-auto justify-center">
      <ShopBanner />

      <ShopProducts />

      <PageExchangeButtons />
    </div>
  );
};

export default Shop;
