// import react icons
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="flex gap-2 mt-5 ">
      <a className="" href="#">
        <FaFacebookSquare />
      </a>
      <a className="" href="#">
        <FaTwitterSquare />
      </a>
      <a className="" href="#" target="_blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default SocialMedia;
