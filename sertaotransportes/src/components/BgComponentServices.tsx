//images
import bgtop from "../assets/Servicos/bgtop.svg";
import bgBottom from "../assets/Servicos/bgBottom.svg";

//animate
import { motion } from "framer-motion";

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
          className="absolute inset-0 z-0
        min-h-height-full-16px"
          src={bgtop}
          alt="bgtop"
        />
        <motion.img
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className=" 
          min-h-height-full-16px"
          src={bgBottom}
          alt="bgBottom"
        />
      </div>
    </main>
  );
}
