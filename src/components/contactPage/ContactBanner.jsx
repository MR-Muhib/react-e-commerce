import contactBanner from "../../assets/shopbanner.png";
import logo from "../../assets/logo.png";

import { RiArrowRightSLine } from "react-icons/ri";
import BannerImage from "../../helper/BannerImages";

export default function ContactBanner() {
  return (
    <BannerImage
      banner={contactBanner}
      logo={logo}
      prev={`Home`}
      icons={<RiArrowRightSLine />}
      view={`Contact`}
      title={`Contact`}
    />
  );
}
