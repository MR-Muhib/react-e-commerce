// import image from root file
import imageOne from "../../../assets/BlogImages/Rectangle 68 (1).png";
import imageTwo from "../../../assets/BlogImages/Rectangle 68 (2).png";
import imageThree from "../../../assets/BlogImages/Rectangle 68.png";

// Import react icons
import Blogs from "./helper/getBlog";

export default function BlogsDesign() {
  return (
    <div className=" p-5 ">
      <Blogs
        title="Going all-in with millennial design"
        image={imageOne}
        category="Wood"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum."
      />
      <Blogs
        title="How to make a home look like a modern mansion"
        image={imageTwo}
        category="Architecture"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero"
      />
      <Blogs
        title="The future of interior design is here"
        image={imageThree}
        category="Interior Design"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed fauc"
      />
    </div>
  );
}
