import RecentPost from "../RecentPost";
import SearchPost from "./helper/SearchPost";

const category = [
  {
    id: 1,
    title: "Crafts",
    product: 2,
  },
  {
    id: 2,
    title: "Design",
    product: 8,
  },

  {
    id: 3,
    title: "Handmade",
    product: 7,
  },
  {
    id: 4,
    title: "Interior",
    product: 1,
  },
  {
    id: 5,
    title: "Wood",
    product: 6,
  },
];

export default function BlogsPost() {
  return (
    <div className="p-5 ">
      {/* Search field */}
      <SearchPost />

      {/* Categories */}
      <div className="py-5">
        <h1 className="font-bold text-xl my-3">Categories</h1>
        {category.map((cat) => (
          <div key={cat.id} className="text-gray-500 flex justify-between p-2">
            <p className="">{cat.title}</p>
            <span className="">{cat.product}</span>
          </div>
        ))}
      </div>

      {/* Recent Posts */}
      <div className="">
        <RecentPost />
      </div>
    </div>
  );
}
