import { useEffect, useState } from "react";
import logoHeader from "../assets/header/logoSertao.png";

//motions
import { motion } from "framer-motion";

//router
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 480);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="min-w-full bg-custom-blue-dark min-h-16 flex items-center justify-between shadow-xl
     drop-shadow-xl z-50 relative"
    >
      <div
        className="flex w-full items-center justify-between
       mx-10 font-robotoC text-white"
      >
        {isMobile ? (
          <>
            <button
              className="text-white focus:outline-none"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? (
                <span>&#10005;</span> //x para fechar
              ) : (
                <span>&#9776;</span> //icone hamburguer
              )}
            </button>
            <Link to={"/"}>
              <div>
                <img
                  className="w-20"
                  src={logoHeader}
                  alt="sertão transportes"
                />
              </div>
            </Link>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-16 left-0
                 right-0 bg-custom-blue-light min-w-full min-h-11 
                 flex flex-col items-center bg-opacity-90
                  z-50 rounded-b-2xl shadow-md shadow-black"
              >
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full text-center hover:bg-white hover:bg-opacity-30 hover:font-semibold"
                >
                  <Link to={"/home"}>
                    <button onClick={() => setIsOpen(false)} className="py-1">
                      Home
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full text-center hover:bg-white hover:bg-opacity-30 hover:font-semibold"
                >
                  <Link to={"/servicos"}>
                    <button onClick={() => setIsOpen(false)} className="py-1 ">
                      Serviços
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full text-center hover:bg-white hover:bg-opacity-30 hover:font-semibold"
                >
                  <Link to={"/nossa-historia"}>
                    <button onClick={() => setIsOpen(false)} className="py-1 ">
                      Nossa História
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full text-center hover:bg-white hover:bg-opacity-30 hover:font-semibold"
                >
                  <Link to={"/institucional"}>
                    <button onClick={() => setIsOpen(false)} className="py-1 ">
                      Institucional
                    </button>
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full text-center hover:bg-white hover:bg-opacity-30 hover:font-semibold"
                >
                  <Link to={"/trabalhe-conosco"}>
                    <button onClick={() => setIsOpen(false)} className="py-1">
                      Trabalhe Conosco
                    </button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="w-full text-center hover:bg-white hover:bg-opacity-30 hover:font-semibold"
                >
                  <Link to={"/contato"}>
                    <button onClick={() => setIsOpen(false)} className="py-1 ">
                      Contato
                    </button>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </>
        ) : (
          <>
            <button
              className={`relative px-3 py-1 font-robotoC flex items-center
             justify-center ${
               isOpen == true ? "bg-custom-blue-light rounded-md " : ""
             }`}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <div className="mr-4">
                <img
                  className="w-20"
                  src={logoHeader}
                  alt="sertão transportes"
                />
              </div>
              Conheça a Sertão Transportes
            </button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute top-16 flex gap-10 left-0 right-0
             bg-custom-blue-light min-w-full min-h-11
              items-center bg-opacity-50 z-50"
              >
                <Link to={"/nossa-historia"}>
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="ml-10 font-robotoC cursor-pointer hover:text-black z-50"
                  >
                    Nossa História
                  </button>{" "}
                </Link>
                <Link to={"/institucional"}>
                  <button
                    onClick={() => setIsOpen((prev) => !prev)}
                    className="font-robotoC cursor-pointer hover:text-black  z-50"
                  >
                    Institucional
                  </button>
                </Link>
              </motion.div>
            )}
            <ul className="flex gap-5">
              <Link to={"/home"}>
                <button
                  className="relative px-2 py-1 font-robotoC flex items-center
             justify-center hover:bg-custom-blue-light rounded-md"
                >
                  Home
                </button>
              </Link>
              <Link to={"/servicos"}>
                <button
                  className="relative px-2 py-1 font-robotoC flex items-center
             justify-center hover:bg-custom-blue-light rounded-md"
                >
                  Serviços
                </button>
              </Link>
              <button
                className="relative px-2 py-1 font-robotoC flex items-center
             justify-center hover:bg-custom-blue-light rounded-md"
              >
                Certificados
              </button>
              <Link to={"/trabalhe-conosco"}>
                <button
                  className="relative px-2 py-1 font-robotoC flex items-center
             justify-center hover:bg-custom-blue-light rounded-md"
                >
                  Trabalhe Conosco
                </button>
              </Link>
              <Link to={"/contato"}>
                <button
                  className="relative px-2 py-1 font-robotoC flex items-center
             justify-center hover:bg-custom-blue-light rounded-md"
                >
                  Contato
                </button>
              </Link>
            </ul>
          </>
        )}
      </div>
    </header>
  );
}
