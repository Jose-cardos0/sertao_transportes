//images
import bgEstradaHome from "../assets/home/bgEstrada.png";
import triangleCars from "../assets/home/triangulo.png";
import artOct from "../assets/home/arteOct.png";
import triangulo2 from "../assets/home/trangulo2.png";

//motions
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function Home() {
  const [widthViwer, setWidth] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setWidth(true);
      } else {
        setWidth(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main
      style={{
        backgroundImage: `url(${bgEstradaHome})`,
      }}
      className=" min-h-height-full-16px 
      min-w-full bg-cover
      bg-no-repeat
      bg-center flex
      overflow-y-hidden
       overflow-x-hidden "
    >
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="flex relative z-0 "
      >
        <h1
          className="absolute w-screen
       text-white font-medium text-5xl
        flex items-center justify-start
        left-11 min-h-height-full-16px
         z-0 mm:max-md:text-base
        mm:max-md:z-50 mm:max-md:w-60
        mm:max-md:left-2
         "
        >
          Empresa especializada <br /> em fornecer soluções de <br /> transporte
          para diversas <br /> necessidades! <br />
          <br />
          Moderna frota de vans, <br /> micro-ônibus, ônibus, <br />
          carros e máquinas.
        </h1>
      </motion.div>

      <div
        style={{ backgroundImage: `url(${artOct})` }}
        className="min-h-height-full-16px
         bg-cover bg-no-repeat w-full flex
          items-center mm:max-md:hidden "
      ></div>

      <motion.div
        initial={{ x: "200%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="min-h-height-full-16px
           bg-no-repeat w-full flex 
           drop-shadow-2xl justify-end"
      >
        {widthViwer === true ? (
          <div
            style={{ backgroundImage: `url(${triangulo2})` }}
            className="min-h-height-full-16px
           bg-no-repeat w-1/2 flex 
           drop-shadow-2xl bg-cover shadow-black  "
          ></div>
        ) : (
          <div
            style={{ backgroundImage: `url(${triangleCars})` }}
            className="min-h-height-full-16px
         bg-no-repeat w-1/2 flex 
         drop-shadow-2xl bg-cover  "
          ></div>
        )}
      </motion.div>
    </main>
  );
}
