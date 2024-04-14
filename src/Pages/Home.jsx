import { useLoaderData } from "react-router-dom";
import Slider from "../Components/HomePage/Slider";
import EstatesCard from "../Components/HomePage/EstatesCard";
import Testimonial from "../Components/HomePage/Testimonial";
import CallToAction from "../Components/HomePage/CallToAction";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <Helmet>
        <title>Elite States | Home</title>
      </Helmet>
      <Slider></Slider>
      <div className="bg-[#F5FAFF] lg:py-[70px] py-[30px] lg:px-0 px-[15px]">
        <h1 className="lg:text-[36px] text-[22px] font-bold text-center">Estates</h1>
        <p className="max-w-[600px] lg:text-[16px] text-[14px] text-center mx-auto text-[#2d3954] lg:mb-[40px] mb-[20px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores
        </p>
        {/* Estates */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[24px] gap-[16px] lg:max-w-[1140px] mx-auto">
          {estates.map((estate, index) => (
            <EstatesCard estate={estate} key={index}></EstatesCard>
          ))}
        </div>
      </div>
      <Testimonial></Testimonial>
      <CallToAction></CallToAction>
    </div>
  );
};
export default Home;
