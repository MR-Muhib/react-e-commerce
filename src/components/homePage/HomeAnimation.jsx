import Image1 from "../../assets/animationImages/Image-living room.png";
import Image2 from "../../assets/animationImages/Mask Group (1).png";
import Image3 from "../../assets/animationImages/Mask Group.png";

const categoryList = [
  {
    id: 1,
    imgUrl: Image1,
    title: "hello world",
  },
  {
    id: 2,
    imgUrl: Image2,
    title: "hello world",
  },
  {
    id: 3,
    imgUrl: Image3,
    title: "hello world",
  },
];

function HomeAnimation() {
  return (
    <div className="my-2">
      <h1 className="container text-center mx-auto mt-5 md:text-2xl text-xl font-semibold">
        Browse The Range
      </h1>
      <p className="text-center mb-6">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      {/* Cards */}
      <div className="flex flex-wrap justify-center items-center gap-5 w-full mx-auto">
        {categoryList.map((category) => (
          // Add return explicitly or use parentheses to return the JSX
          <CategoryCard
            key={category.id} // Add a unique key for each item
            imgUrl={category.imgUrl}
            title={category.title}
          />
        ))}
      </div>
    </div>
  );
}

const CategoryCard = ({ imgUrl, title }) => {
  return (
    <div>
      <img src={imgUrl} alt={title} className="w-48" />
      <p className="text-center font-bold mt-2">{title}</p>
    </div>
  );
};

export default HomeAnimation;
