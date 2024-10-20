import { useState } from "react";
import logoHeader from "../assets/header/logoSertao.png";

//motions
import { motion } from "framer-motion";

//router
import { Link } from "react-router-dom";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="min-w-full bg-custom-blue-dark min-h-16 flex items-center justify-between shadow-xl
     drop-shadow-xl z-50"
    >
      <div
        className="flex w-full items-center justify-between
       mx-10 font-robotoC text-white"
      >
        <button
          className={`relative px-3 py-1 font-robotoC flex items-center
             justify-center ${
               isOpen == true ? "bg-custom-blue-light rounded-md " : ""
             }`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          <div className="mr-4">
            <img className="w-20" src={logoHeader} alt="sertão transportes" />
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
      </div>
    </header>
  );
}
