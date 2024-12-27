import { useEffect, useState } from "react";

// Import recent post image

import imageOne from "../../assets/recentPostImage/1.png";
import imageTwo from "../../assets/recentPostImage/2.png";
import imageThree from "../../assets/recentPostImage/3.png";
import imageFour from "../../assets/recentPostImage/4.png";
import imageFive from "../../assets/recentPostImage/5.png";

// current time
const currentDate = new Date().toLocaleDateString();

const recentPostArray = [
  {
    id: 1,
    imgUrl: imageOne,
    title: "Going all-in with millennial design",
    date: currentDate,
  },

  {
    id: 2,
    imgUrl: imageTwo,
    title: "Exploring new ways of decorating",
    date: currentDate,
  },

  {
    id: 3,
    imgUrl: imageThree,
    title: "Handmade pieces that took time to make",
    date: currentDate,
  },

  {
    id: 4,
    imgUrl: imageFour,
    title: "A colorful office redesign",
    date: currentDate,
  },

  {
    id: 5,
    imgUrl: imageFive,
    title: "Modern home in Milan",
    date: currentDate,
  },
  // Add more recent post objects as needed
];

const RecentPost = () => {
  return (
    <div>
      <h1 className="font-bold text-xl my-3">Recent Posts</h1>

      {recentPostArray.map((post) => (
        <div key={post.id} className="flex gap-5 py-3 pl-5">
          <img src={post.imgUrl} alt="Recent Post image" />

          {/* Post title and date */}
          <div>
            <p className="font-semibold text-xm">{post.title}</p>
            <span className="text-gray-500">{post.date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentPost;
