import Image from "next/image";

// Import all vectors
import vector1 from "../../../public/vector/Vector1.png";
import vector2 from "../../../public/vector/Group 2.png";
import vector3 from "../../../public/vector/Vector 3.png";
import vector4 from "../../../public/vector/Vector 4.png";

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
    <div className="p-5 bg-[#faf3ea] w-full grid grid-cols-2 md:grid-cols-4 justify-center mx-auto gap-5">
      <div className="flex items-center gap-2 px-2">
        <img className="w-12 h-12" src={vector1} alt={vector1} />

        <div className="">
          <h1 className="font-semibold text-md">High Quality</h1>
          <p className="text-gray text-sm">crafted from top materials</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2">
        <img className="w-12 h-12" src={vector2} alt={vector2} />

        <div className="">
          <h1 className="font-semibold text-md">Warranty Protection</h1>
          <p className="text-gray text-sm">Over 2 years</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2">
        <img className="w-12 h-12" src={vector3} alt={vector3} />

        <div className="">
          <h1 className="font-semibold text-md">Free Shipping</h1>
          <p className="text-gray text-sm">Order over 150 $</p>
        </div>
      </div>
      <div className="flex items-center gap-2 px-2">
        <img className="w-12 h-12" src={vector4} alt={vector4} />

        <div className="">
          <h1 className="font-semibold text-md">24 / 7 Support</h1>
          <p className="text-gray text-sm">Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
