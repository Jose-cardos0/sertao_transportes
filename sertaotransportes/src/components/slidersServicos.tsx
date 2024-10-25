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

//icons
import { IoLogoWhatsapp } from "react-icons/io";
import { motion } from "framer-motion";

export function SlidersServicos() {
  return (
    <div
      className="flex-col items-center
     justify-center mt-28 mm:max-md:mt-0 drop-shadow-2xl  "
    >
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-10/12 rounded-br-full items-center justify-center
       bg-white text-center mt-3 text-sm"
      >
        <strong className="text-custom-blue-dark">NOSSO ENDEREÇO</strong>
        <p className="font-light text-xs">
          Avenida Erotildes Noer de Aragçai <br />
          2274. Bairro Jardim do Sertão. <br />
          Nossa Senhora da Glória - SE <br />
          CEP: 49680-000.{" "}
        </p>
      </motion.div>
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
              className="drop-shadow-md w-full mt-5"
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
              className="drop-shadow-md w-full mt-5"
              src={slider3}
              alt="serviços sertão transportes"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className="drop-shadow-md w-full mm:max-md:-ml-8 mt-5"
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
      <div className="w-full flex items-center justify-center px-10 pt-3">
        <button
          className="flex items-center
         justify-center gap-2 bg-white px-5
          rounded-xl shadow-md
           shadow-black cursor-pointer
            hover:bg-custom-blue-dark
             hover:text-white transition duration-300 animate-bounce"
        >
          <strong>CONTATE-NOS</strong>
          <IoLogoWhatsapp size={40} color="green" />
        </button>
      </div>
    </div>
  );
}
