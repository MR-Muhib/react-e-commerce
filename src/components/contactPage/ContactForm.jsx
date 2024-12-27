import React from "react";

export default function ContactForm() {
  return (
    <form className="w-[60%]">
      <div className="">
        <label className="font-semibold text-xm" htmlFor="name">
          Your name
        </label>
        <input
          className="border p-3 rounded-md w-full my-3"
          type="text"
          id="name"
          name="name"
          placeholder="Abc@def.com"
          required
        />
      </div>
      <div className="">
        <label className="font-semibold text-xm" htmlFor="email">
          Email address
        </label>
        <input
          className="border p-3 rounded-md w-full my-3"
          type="email"
          id="email"
          name="email"
          placeholder="This is an optional"
          required
        />
      </div>
      <div className="">
        <label className="font-semibold text-xm" htmlFor="subject">
          Subject
        </label>
        <input
          className="border p-3 rounded-md w-full my-3"
          type="text"
          id="subject"
          name="subject"
          placeholder="This is an optional"
          required
        />
      </div>
      <div className="">
        <label className="font-semibold text-xm" htmlFor="message">
          Message
        </label>
        <textarea
          className="border p-3 rounded-md w-full my-3"
          id="message"
          name="message"
          rows="3"
          cols="30"
          placeholder="Hi! i’d like to ask about"
          required
        />
      </div>
      <div className="">
        <button
          className="bg-[#b88e2f] px-10 py-2 text-white font-semibold rounded-md"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
