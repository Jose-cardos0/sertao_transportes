import { useState } from "react";

//motions
import { motion } from "framer-motion";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header
      className="min-w-full bg-custom-blue-dark min-h-16 flex items-center justify-between shadow-xl
     drop-shadow-xl"
    >
      <div className="flex w-full items-center justify-between mx-10 font-robotoC text-white">
        <button
          className={`relative px-3 py-1 font-robotoC flex items-center justify-center ${
            isOpen == true ? "bg-custom-blue-light rounded-md " : ""
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Conheça a Sertão Transportes
        </button>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute top-16 flex gap-10 left-0 right-0
             bg-custom-blue-light min-w-full min-h-11 items-center bg-opacity-50 z-10"
          >
            <p className="ml-10 font-robotoC cursor-pointer hover:text-black ">
              Nossa História
            </p>{" "}
            <p className="font-robotoC cursor-pointer hover:text-black ">
              Institucional
            </p>
          </motion.div>
        )}
        <ul className="flex gap-20">
          <li className="">Serviços</li>
          <li>Certificados</li>
          <li>Trabalhe Conosco</li>
          <li>Contato</li>
        </ul>
      </div>
    </header>
  );
}
