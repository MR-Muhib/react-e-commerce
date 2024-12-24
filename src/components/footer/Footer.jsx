import { Link } from "react-router-dom";
import Branding from "./Branding";
import Linking from "./Linking";
import Help from "./Help";

export default function Footer() {
  return (
    <footer className="container my-5 bg-white  mx-auto">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 ">
        {/* Branding Section */}
        <Branding />

        {/* Links Section */}
        <Linking />

        {/* Help Section */}
        <Help />

        {/* Newsletter Section */}
        <div className="">
          <h2 className="text-lg font-semibold text-[#9F9F9F] mb-8">
            Newsletter
          </h2>

          <div className="mt-4 flex">
            <input
              type="text"
              name="title"
              placeholder="Enter your email"
              className=" border-b-2 mr-2 outline-none  bg-transparent border-black w-auto"
            />
            <button className=" border-b-2  border-black mt-5">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-300 pt-6 px-12">
        <p className="text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Funiro. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
