import Slide1 from "../../assets/banner-01.jpg";
import Slide2 from "../../assets/banner-02.jpg";
import Slide3 from "../../assets/banner-03.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";

const Slider = () => {
  return (
    <div>
      <div className="relative">
        <div className="flex justify-center">
          <div className="absolute z-10 top-[37%] text-center">
            <h1 className="text-white lg:text-[50px] md:text-[32px] text-[24px] font-bold">Welcome to Elite States</h1>
            <p className="text-white max-w-[700px] hidden lg:block">
              Welcome to Elite States, your premier destination for luxury residential real estate. Discover unparalleled elegance and
              sophistication in every property showcased on our platform.
            </p>
          </div>
        </div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          rewind={true}
          effect={"fade"}
          modules={[EffectFade, Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={Slide1} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide2} className="w-full" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Slide3} className="w-full" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
