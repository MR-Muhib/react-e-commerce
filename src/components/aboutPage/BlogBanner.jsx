// import React from "react";
// import { Link } from "react-router-dom";

// import react icons
import blogBanner from "../../assets/shopbanner.png";
import logo from "../../assets/logo.png";
import { RiArrowRightSLine } from "react-icons/ri";
import BannerImage from "../../helper/BannerImages";

// Blog banner component to display on the blog page

const BlogBanner = () => {
  return (
    <BannerImage
      banner={blogBanner}
      logo={logo}
      prev={`home`}
      icons={<RiArrowRightSLine />}
      view={`Blog`}
      title={`Blog`}
    />
  );
};

export default BlogBanner;
