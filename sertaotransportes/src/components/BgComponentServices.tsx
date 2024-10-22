//images
import bgtop from "../assets/Servicos/bgtop.svg";
import bgBottom from "../assets/Servicos/bgBottom.svg";

//animate
import { motion } from "framer-motion";

//pages
import { Footer } from "./Footer";
export function BgComponentServices() {
  return (
    <main
      style={{ backgroundColor: "#D2E2EC" }}
      className=" inset-0 z-0
      min-w-full min-h-height-full-16px "
    >
      <div className="flex relative ">
        <motion.img
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="absolute inset-0 z-10  bg-cover -ml-5
        min-h-height-full-16px mm:max-md:hidden"
          src={bgtop}
          alt="bgtop"
        />
        <motion.img
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className=" 
          min-h-height-full-16px bg-cover mm:max-md:hidden"
          src={bgBottom}
          alt="bgBottom"
        />
      </div>
      <footer className="bg-white flex justify-end items-baseline z-50 mm:max-md:absolute">
        <Footer />
      </footer>
    </main>
  );
}
