//images
import bgEstradaHome from "../assets/home/bgEstrada.png";
import triangleCars from "../assets/home/triangulo.png";
import artOct from "../assets/home/arteOct.png";

//motions
import { motion } from "framer-motion";

export function Home() {
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
       text-white font-righ text-5xl
        flex items-center justify-start
        left-11 min-h-height-full-16px
        mt-10 z-0 mm:max-md:text-sm
        mm:max-md:z-50 mm:max-md:w-60
        mm:max-md:left-2  
         "
        >
          EMPRESA ESPECIALIZADA <br /> EM FORNECER SOLUÇÕES <br /> TRANSPORTE
          PARA DIVERSAS <br /> NECESSODADES <br />
          <br />
          MODERNA FROTA DE VANS, <br /> MICRO-ÔNIBUS, ÔNIBUS, <br />
          CARROS E MÁQUINAS.
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
        <div
          style={{ backgroundImage: `url(${triangleCars})` }}
          className="min-h-height-full-16px
           bg-no-repeat w-1/2 flex 
           drop-shadow-2xl bg-cover  "
        ></div>
      </motion.div>
    </main>
  );
}
