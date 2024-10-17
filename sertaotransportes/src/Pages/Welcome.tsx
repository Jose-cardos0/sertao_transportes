import sertaoTransportes from "../assets/welcome/sertaoTransportesLogoWelcome.svg";
import bgEstrada from "../assets/welcome/bgEstrada.png";
import onibusSertao from "../assets/welcome/onibusSertao1.svg";
import retangle from "../assets/welcome/retangle.png";
//router
import { Link } from "react-router-dom";
//motion
import { motion } from "framer-motion";

export function Welcome() {
  return (
    <main
      style={{ backgroundImage: `url(${bgEstrada})` }}
      className={` relative bg-cover min-h-screen min-w-full overflow-x-hidden
        flex items-center justify-center m-auto drop-shadow-2xl shadow-black`}
    >
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        style={{
          backgroundImage: `url(${retangle})`,
        }}
        className="absolute
         top-0 right-0 w-1/2
          h-screen bg-no-repeat bg-cover"
      ></motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 6,
          delay: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="mx-5 z-20">
          <img
            className="drop-shadow-lg "
            src={sertaoTransportes}
            alt="sertão transportes"
          />
        </div>
        <div className="flex items-center justify-center mt-20 z-20 ">
          <Link to={"/home"}>
            <div className="max-w-max flex relative">
              <img
                className="max-w-40 absolute 
                right-32 bottom-1  z-50 "
                src={onibusSertao}
                alt=""
              />
              <button
                className="relative bottom-5 left-2 inline-flex items-center justify-start
                px-5 py-2 overflow-hidden font-bold rounded-full group
                 bg-custom-blue-dark pl-16 pr-5 shadow-2xl"
              >
                <span
                  className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24
                   bg-white opacity-100 group-hover:-translate-x-0"
                ></span>
                <span
                  className="relative w-full 
                text-left text-white text-lg
                 transition-colors duration-200
                  ease-in-out group-hover:text-custom-blue-dark
                   uppercase font-righ font-normal"
                >
                  acessar site
                </span>
              </button>
            </div>
          </Link>
        </div>
      </motion.div>
    </main>
  );
}
