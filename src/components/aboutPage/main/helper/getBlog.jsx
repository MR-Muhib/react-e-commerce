import { useState } from "react";
import BlogCreatorInfo from "./BlogCreatorInfo";

const Blogs = ({ image, title, content }) => {
  // Correctly use array destructuring
  const [toggle, setToggle] = useState(false);

  const toggleReadMore = () => {
    setToggle(!toggle);
  };

  return (
    <div className="pb-5">
      <img className="" src={image || "image is null"} alt={title} />

      {/* Blog creator info */}
      <BlogCreatorInfo />

      <h1 className="text-xl font-bold my-2">{title}</h1>
      <p className="text-justify text-gray-500">
        {toggle ? content : `${content.slice(0, 30)}...`}
      </p>

      {/* Read more button */}
      <button onClick={toggleReadMore} className="text-blue-500">
        {toggle ? "Show Less" : "Read More"}
      </button>
    </div>
  );
};

export default Blogs;
