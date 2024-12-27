// Import react icons
import { CiUser, CiCalendarDate } from "react-icons/ci";
import { FaClipboard } from "react-icons/fa6";

const date = new Date().toLocaleDateString();

// Blog array
const BlogPostArray = [
  {
    id: 1,
    icons: <CiUser />,
    author: "Admin",
  },
  {
    id: 2,
    icons: <CiCalendarDate />,
    title: { date },
  },
  {
    id: 3,
    icons: <FaClipboard />,
    author: "Wood",
  },
];

const BlogCreatorInfo = () => {
  return (
    <div className="flex gap-5 pt-5 text-center text-sm  text-gray-500 items-center ">
      {BlogPostArray.map((item) => (
        <div key={item.id} className="flex gap-2">
          <span className="">{item.icons}</span>
          <p className="">{item.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogCreatorInfo;
