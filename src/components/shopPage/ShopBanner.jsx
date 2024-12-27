import { RiArrowRightSLine } from "react-icons/ri";
import { Link } from "react-router-dom";

// import image path
import shopBanner from "../../assets/shopbanner.png";
import BannerImage from "../../helper/BannerImages";

const ShopBanner = () => {
  return (
    <BannerImage
      banner={shopBanner}
      logo={null}
      prev={`home`}
      icons={<RiArrowRightSLine />}
      view={`Shop`}
      title={`Shop`}
    />
  );
};

export default ShopBanner;
