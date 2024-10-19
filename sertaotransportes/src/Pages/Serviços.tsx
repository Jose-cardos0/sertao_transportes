//icons
import { FaCheck } from "react-icons/fa6";

//motions
import { motion, useScroll, useTransform } from "framer-motion";

//images
import onibusComil from "../assets/Servicos/onibusRodoviarioComil.png";
import carServices from "../assets/Servicos/carsServices.png";
import escolar from "../assets/Servicos/escolar.png";
import pesados from "../assets/Servicos/maquinarioPesado.png";
import trator from "../assets/Servicos/trator.png";

//composntes
import { Header } from "../components/Header";
import { BgComponentServices } from "../components/BgComponentServices";

export function Servicos() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);

  return (
    <main
      style={{ backgroundColor: "#D2E2EC" }}
      className="min-w-full min-h-height-full-16px relative"
    >
      <div className="absolute inset-0 z-0">
        <BgComponentServices />
      </div>
      <div className="relative flex-col z-10 flex-grow ">
        <Header />
        <section className="ml-12 mt-10 flex-col items-center justify-center">
          <h1
            className="font-righ 
        text-5xl uppercase text-white "
          >
            nossos serviços
          </h1>
          {/*divs com items */}
          {/*divs transportes e passageiros */}
          <motion.div
            style={{
              y,
              opacity: useTransform(scrollY, [0, 500], [1, 0]),
            }}
            className="flex items-center justify-between mt-20 "
          >
            <div className="w-1/2">
              <p
                className="font-righ 
        text-5xl  text-white flex gap-2"
              >
                <FaCheck />
                Transporte de passageiros;
              </p>{" "}
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Ônibus
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Microônibus
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Vans
              </p>
            </div>
            <div
              className="w-1/2 flex items-center 
            justify-center"
            >
              <img
                className="w-3/4"
                src={onibusComil}
                alt="Onibus 
              sertão transportes"
              />
            </div>
          </motion.div>
          {/*divs terceirização da frota */}
          <motion.div
            style={{
              y,
              opacity: useTransform(scrollY, [800, 0], [1, 0]),
            }}
            className="flex items-center justify-between my-32"
          >
            <div className="w-1/2">
              <p
                className="font-righ 
        text-5xl  text-white flex-col "
              >
                <p className="flex gap-2">
                  <FaCheck /> Terceirização da frota.
                </p>
                <p className="flex gap-2">
                  <FaCheck /> Locação de veículos;
                </p>
              </p>{" "}
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Polo
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Voyage
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Gol
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Ranger
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Strada
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Hilux
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Cronos
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Pulse
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Jipe
              </p>
            </div>
            <div
              className="w-1/2 flex items-center 
            justify-center"
            >
              <img
                className="w-3/4"
                src={carServices}
                alt="Onibus 
              sertão transportes"
              />
            </div>
          </motion.div>
          {/*divs transporte escolar */}
          <motion.div className="flex items-center justify-between my-48">
            <div className="w-1/2">
              <p
                className="font-righ 
        text-5xl  text-white flex gap-2"
              >
                <FaCheck />
                Transporte escolar;
              </p>{" "}
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Ônibus
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Microônibus
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Vans
              </p>
            </div>
            <div
              className="w-1/2 flex items-center 
            justify-center"
            >
              <img
                className="w-3/4"
                src={escolar}
                alt="Onibus 
              sertão transportes"
              />
            </div>
          </motion.div>
          {/*divs transporte pesados */}
          <motion.div className="flex items-center justify-between my-36">
            <div
              className="w-1/2 flex items-center 
            justify-center"
            >
              <img
                className="w-3/4"
                src={pesados}
                alt="Onibus 
              sertão transportes"
              />
            </div>
            <div className="w-1/2">
              <p
                className="font-righ 
        text-5xl  text-white flex gap-2"
              >
                <FaCheck />
                Locação de máquinas e <br />
                equipamentos;
              </p>{" "}
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Escavadeira hidráulica
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Retroescavadeira
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Pá carregadeira
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Motoniveladora (Patrol)
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Rolo compactador
              </p>
            </div>
          </motion.div>
          {/*divs transporte trator */}
          <motion.div className="flex items-center justify-between my-72">
            <div
              className="w-1/2 flex items-center 
            justify-center"
            >
              <img
                className="w-3/4"
                src={trator}
                alt="Onibus 
              sertão transportes"
              />
            </div>
            <div className="w-1/2">
              <p
                className="font-righ 
        text-5xl  text-white flex gap-2"
              >
                <FaCheck />
                Locação de máquinas e <br />
                equipamentos;
              </p>{" "}
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Escavadeira hidráulica
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Retroescavadeira
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Pá carregadeira
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Motoniveladora (Patrol)
              </p>
              <br />
              <p
                className="font-righ 
        text-5xl  text-white "
              >
                • Rolo compactador
              </p>
            </div>
          </motion.div>
        </section>
      </div>
    </main>
  );
}
