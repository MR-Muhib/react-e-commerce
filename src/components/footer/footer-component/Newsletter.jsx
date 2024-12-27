import React from "react";

const Newsletter = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold text-[#9F9F9F] mb-8">Newsletter</h2>

      <div className="mt-4 flex">
        <input
          type="text"
          name="title"
          placeholder="Enter your email"
          className=" border-b-2 mr-2 outline-none  bg-transparent border-black w-auto"
        />
        <button className=" border-b-2  border-black mt-5">Subscribe</button>
      </div>
    </div>
  );
};

export default Newsletter;
