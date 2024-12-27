// About page

import BlogBanner from "../components/aboutPage/BlogBanner";
import BlogsDesign from "../components/aboutPage/main/BlogDesign";
import BlogsPost from "../components/aboutPage/main/BlogPost";

const About = () => {
  return (
    <div className="container mx-auto justify-center">
      <BlogBanner />

      <div className="flex gap-5">
        <BlogsDesign />
        <BlogsPost />
      </div>
    </div>
  );
};

export default About;
