// Import all vectors
import vector1 from "../../assets/vector/Vector1.png";
import vector2 from "../../assets/vector/Group 2.png";
import vector3 from "../../assets/vector/Vector 3.png";
import vector4 from "../../assets/vector/Vector 4.png";

const Introduce = [
  {
    id: 1,
    title: "High Quality",
    description: "crafted from top materials",
    image: vector1,
  },
  {
    id: 2,
    title: "Warranty Protection",
    description: "Over 2 years",
    image: vector2,
  },
  {
    id: 3,
    title: "Free Shipping",
    description: "Order over 150 $",
    image: vector3,
  },
  {
    id: 4,
    title: "24 / 7 Support",
    description: "Dedicated support",
    image: vector4,
  },
];

export default function IntroduceApplication() {
  return (
    <div className="py-4 px-2 bg-[#faf3ea] w-full grid grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-2">
      {Introduce.map((item) => (
        <div key={item.id} className="flex items-center gap-2 px-2">
          <img className="w-12 h-12" src={item.image} alt={item.image} />

          <div className="">
            <h1 className="font-semibold text-md">{item.title}</h1>
            <p className="text-gray text-sm">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
