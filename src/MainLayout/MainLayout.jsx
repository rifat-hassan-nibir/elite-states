import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { ToastContainer } from "react-toastify";
// ..
AOS.init();

const MainLayout = () => {
  return (
    <div>
      <ToastContainer />
      <div className="mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
