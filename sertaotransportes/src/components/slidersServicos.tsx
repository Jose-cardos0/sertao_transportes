//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";

//imgs
import slider1 from "../assets/slidersServicesMobile/slider1.png";
import slider2 from "../assets/slidersServicesMobile/slider2.png";
import slider3 from "../assets/slidersServicesMobile/slider3.png";
import slider4 from "../assets/slidersServicesMobile/slider4.png";
import slider5 from "../assets/slidersServicesMobile/slider5.png";

//components
import footer from "../assets/footer/footer.png";

export function SlidersServicos() {
  return (
    <div className="flex-col items-center justify-center mt-14">
      <Swiper
        modules={[Pagination, Navigation, Scrollbar, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        // navigation={true}
        pagination={{ clickable: true }}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <div className="flex items-center justify-center ">
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full"
              src={slider1}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full"
              src={slider2}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full"
              src={slider3}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full mm:max-md:-ml-8"
              src={slider4}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full mm:max-md:-ml-2"
              src={slider5}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
        </div>
      </Swiper>
      <div className="bg-white ">
        <img className="h-32" src={footer} alt="sertão transportes" />
      </div>
    </div>
  );
}
