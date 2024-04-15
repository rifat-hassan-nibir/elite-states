import { useLoaderData } from "react-router-dom";
import Slider from "../Components/HomePage/Slider";
import Testimonial from "../Components/HomePage/Testimonial";
import CallToAction from "../Components/HomePage/CallToAction";
import { Helmet } from "react-helmet-async";

import Estates from "../Components/HomePage/Estates";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Elite States | Home</title>
      </Helmet>
      <div data-aos="fade-in" data-aos-duration="1500">
        <Slider></Slider>
      </div>
      <div>
        <Estates estates={estates}></Estates>
      </div>
      <Testimonial></Testimonial>
      <CallToAction></CallToAction>
    </div>
  );
};
export default Home;
