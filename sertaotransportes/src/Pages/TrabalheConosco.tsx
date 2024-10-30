//motion
import { motion } from "framer-motion";

//router
// import { Link } from "react-router-dom";

//images
import trabalheConosco from "../assets/trabalheConosco/trabalheConosco.png";
// import FooterPng from "../assets/footer/footer.png";

export function TrabalheConosco() {
  return (
    <main
      className="animated-bg
     flex items-end 
     justify-end overflow-hidden min-h-height-full-16px"
    >
      <section
        className="flex-grow items-center
       justify-end mt-10 z-0"
      >
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mt-40 max-md:mt-0"
        >
          <div className="flex items-center justify-end mm:max-md:flex-col ">
            <div
              className="w-2/3 ml-12 items-center flex justify-center
             mm:max-md:ml-0 mm:max-md:mb-11"
            >
              <h1 className="font-righ text-2xl  uppercase text-white ">
                trabalhe conosco <br />
                nos envie um currículo! <br />
                <a href="#">
                  <p className="font-righ text-lg text-red-400 lowercase">
                    <a href="https://www.google.com/" target="_blanck">
                      contato@sertaoturismo.com.br
                    </a>
                  </p>
                </a>
              </h1>
            </div>
            <div
              className="w-1/2 flex items-end justify-end mm:max-md:w-full
               "
            >
              <img
                className="w-full flex items-end justify-end  "
                src={trabalheConosco}
                alt="trabalhe conosco sertao transportes"
              />
            </div>
          </div>
        </motion.div>
        {/* <Link to={"/"}>
          <div className=" bg-white flex items-center justify-center m-auto">
            <img
              className="max-w-2xl max-md:w-96 max-md:px-2 "
              src={FooterPng}
              alt="sertão transportes"
            />
          </div>
        </Link> */}
      </section>
    </main>
  );
}
