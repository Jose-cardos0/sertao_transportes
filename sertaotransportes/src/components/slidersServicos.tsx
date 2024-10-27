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
// import footer from "../assets/footer/footer.png";

//icons
// import { IoLogoWhatsapp } from "react-icons/io";
// import { motion } from "framer-motion";

export function SlidersServicos() {
  return (
    <div
      className="flex-col items-center
     justify-center mt-28 mm:max-md:mt-0 drop-shadow-2xl  "
    >
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
              className="drop-shadow-md w-full mt-16"
              src={slider1}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full mb-7"
              src={slider2}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full ml-4 mt-14"
              src={slider3}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full -ml-5 mt-16"
              src={slider4}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full mt-16 -ml-2"
              src={slider5}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
        </div>
      </Swiper>

      {/* <button
          className="flex items-center
         justify-center gap-2 bg-white px-5
          rounded-xl shadow-md
           shadow-black cursor-pointer
            hover:bg-custom-blue-dark
             hover:text-white transition duration-300 animate-bounce"
        >
          <strong>CONTATE-NOS</strong>
          <IoLogoWhatsapp size={40} color="green" />
        </button> */}
    </div>
  );
}
