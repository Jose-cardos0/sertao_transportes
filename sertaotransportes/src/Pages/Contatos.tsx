import { Footer } from "../components/Footer";

//motion
import { motion } from "framer-motion";

//router
import { Link } from "react-router-dom";

export function Contato() {
  return (
    <main
      className="animated-bg w-full
   flex-col items-center justify-center overflow-hidden "
    >
      <section className="flex-col items-center justify-center">
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="mx-12 mb-20 mt-10"
        >
          <h1 className="font-righ text-5xl uppercase text-white">CONTATO</h1>
          <form className="min-w-full mt-5 ">
            <label>
              <p className="font-righ text-lg">Nome:</p>
              <input
                className="rounded-lg min-w-full bg-blue-100 outline-none
               text-black px-2 uppercase"
                type="text"
              />
            </label>
            <label>
              <p className="font-righ text-lg">Contato:</p>
              <input
                className="rounded-lg min-w-full bg-blue-100 outline-none
               text-black px-2 uppercase"
                type="text"
              />
            </label>
            <label>
              <p className="font-righ text-lg">Caixa de mensagem:</p>
              <textarea
                rows={8}
                className="rounded-lg min-w-full bg-blue-100 outline-none
               text-black p-2 uppercase :"
              />
            </label>
            <div className="min-w-full flex items-end justify-end mt-4">
              <button
                className="text-white font-righ
              bg-custom-blue-dark
              py-1 px-9 rounded-xl uppercase shadow-md shadow-black transition duration-300
               hover:bg-white hover:text-custom-blue-dark"
              >
                enviar
              </button>
            </div>
          </form>
        </motion.div>
        <Link to={"/"}>
          <div className="w-full bg-white flex items-end justify-end ">
            <Footer />
          </div>
        </Link>
      </section>
    </main>
  );
}
