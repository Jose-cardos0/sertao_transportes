import { Footer } from "../components/Footer";

//motion
import { motion } from "framer-motion";

//router
import { Link } from "react-router-dom";

//images
import trabalheConosco from "../assets/trabalheConosco/trabalheConosco.png";

export function TrabalheConosco() {
  return (
    <main
      className="animated-bg w-full
     flex-col items-center 
     justify-center overflow-hidden
      min-h-height-full-16px "
    >
      <section
        className="flex-grow items-center
       justify-end mt-10 z-0 mm:max-md:h-screen   "
      >
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-end mm:max-md:flex-col ">
            <div className="w-2/3 ml-12 items-center flex justify-center mm:max-md:w-full mm:max-md:ml-0">
              <h1 className="font-righ text-2xl  uppercase text-white ">
                trabalhe conosco <br />
                nos envie um currículo! <br />
                <a href="#">
                  <p className="font-righ text-lg text-red-400 lowercase">
                    contato@sertaoturismo.com.br
                  </p>
                </a>
              </h1>
            </div>
            <div
              style={{ backgroundImage: `url(${trabalheConosco})` }}
              className="w-1/2 mm:max-md:w-full
               "
            >
              <img
                className="min-w-screen flex items-end justify-end mm:max-md:mt-20 "
                src={trabalheConosco}
                alt="trabalhe conosco sertao transportes"
              />
            </div>
          </div>
        </motion.div>
      </section>
      <Link to={"/"}>
        <div
          className="min-w-full
         bg-white flex justify-end 
         items-end z-10   "
        >
          <Footer />
        </div>
      </Link>
    </main>
  );
}
