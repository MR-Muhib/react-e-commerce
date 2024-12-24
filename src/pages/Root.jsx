import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div className="">
        <Outlet />
      </div>

      <div>
        <Footer />
      </div>
    </>
  );
};

export default Root;
