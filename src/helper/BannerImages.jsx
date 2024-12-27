import { Link } from "react-router-dom";

const BannerImage = ({ banner, logo, prev, icons, view, title }) => {
  return (
    <div className="relative w-full h-[200px] box-border mb-2">
      {/* Background Image */}
      <img
        className="absolute inset-0 w-full h-full object-cover"
        src={banner}
        alt="A vibrant shop banner background"
      />

      <div className="relative  top-10">
        {/* Conditionally render logo */}
        {logo && <img className="w-8 h-8 p-1 mx-auto" src={logo} alt={title} />}

        <h1 className="text-center  font-semibold text-xl">{title}</h1>

        <div className="flex text-center items-center justify-center p-1 ">
          <Link to="/">{prev}</Link>

          <span className="justify-center text-center pt-1">{icons}</span>

          <p className="">{view}</p>
        </div>
      </div>
    </div>
  );
};


export default BannerImage;
