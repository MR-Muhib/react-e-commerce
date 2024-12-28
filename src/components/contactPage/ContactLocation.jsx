// React Icons
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

const contactInfo = [
  {
    icon: <IoLocationSharp />,
    title: "Address",
    content: ["1234 Main St, City"],
  },
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    content: [" Mobile: +(84) 546-6789", "Hotline: +(84) 456-6789"],
  },

  {
    icon: <MdWatchLater />,
    title: "Working Time",
    content: ["Monday-Friday: 9:00 - 22:00", "Saturday-Sunday: 9:00 - 21:00"],
  },
];

export default function ContactLocation() {
  return (
    <div className="">
      {contactInfo.map((info) => (
        <div key={info.title} className="flex gap-2 mb-8">
          {info.icon}
          <div className="">
            <h1 className="font-semibold text-md">{info.title}</h1>
            <p className="">{info.content[0]}</p>
            <p className="">{info.content[1]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
