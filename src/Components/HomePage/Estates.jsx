/* eslint-disable react/prop-types */
import EstatesCard from "./EstatesCard";

const Estates = ({ estates }) => {
  return (
    <section className="relative bg-[#F5FAFF] lg:py-[70px] py-[30px]  lg:px-0 px-[15px]">
      <div data-aos="zoom-in" data-aos-duration="1500" data-aos-anchor="#estate-anchor" className=" ">
        <h1 className="lg:text-[36px] text-[22px] font-bold text-center">Estates</h1>
        <p className="max-w-[600px] lg:text-[16px] text-[14px] text-center mx-auto text-[#2d3954] lg:mb-[40px] mb-[20px]">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos
          dolores
        </p>
        {/* Estates */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 lg:gap-[24px] gap-[16px] lg:max-w-[1140px] mx-auto">
          {estates.map((estate, index) => (
            <EstatesCard estate={estate} key={index} index={index}></EstatesCard>
          ))}
        </div>
      </div>
      {/* Anchor for animation */}
      <div id="estate-anchor" className="absolute size-5 bg-green-400 right-0 lg:top-[25%] top-[5%]"></div>
    </section>
  );
};

export default Estates;
