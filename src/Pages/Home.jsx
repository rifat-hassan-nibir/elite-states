import { useLoaderData } from "react-router-dom";
import Slider from "../Components/HomePage/Slider";
import EstatesCard from "../Components/HomePage/EstatesCard";

const Home = () => {
  const estates = useLoaderData();
  return (
    <div>
      <Slider></Slider>
      <h1 className="text-[30px] font-bold text-center mb-[50px]">Estates</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[24px] gap-[16px]">
        {estates.map((estate, index) => (
          <EstatesCard estate={estate} key={index}></EstatesCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
