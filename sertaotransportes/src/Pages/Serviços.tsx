//icons
import { FaCheck } from "react-icons/fa6";
import React, { useEffect, useState } from "react";

//motions
import { motion, useInView } from "framer-motion";

//images
import onibusComil from "../assets/Servicos/onibusRodoviarioComil.png";
import carServices from "../assets/Servicos/carsServices.png";
import escolar from "../assets/Servicos/escolar.png";
import pesados from "../assets/Servicos/maquinarioPesado.png";
import trator from "../assets/Servicos/trator.png";
import logo from "../assets/welcome/sertaoTransportesLogoWelcome.svg";

//composntes
import { Header } from "../components/Header";
import { BgComponentServices } from "../components/BgComponentServices";
import { SlidersServicos } from "../components/slidersServicos";

interface PropsDados {
  title: string;
  items: string[];
  imageSrc: string;
}

export function Servicos() {
  const [isWitdh, setIsWidth] = useState<boolean>(false);
  const [isColorBg, setIsColor] = useState<string>("#00497E");
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setIsWidth(true);
        setIsColor("#00497E");
      } else {
        setIsWidth(false);
        setIsColor("#00497E");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(isColorBg);
  return (
    <main
      style={{ backgroundColor: `${isColorBg}` }}
      className="min-w-full min-h-height-full-16px relative mm:max-md:h-screen"
    >
      {!isWitdh ? (
        <div className="absolute inset-0 z-0">
          <BgComponentServices />
        </div>
      ) : (
        ""
      )}

      <div className="relative flex-col z-10 flex-grow ">
        <Header />
        <section
          className="ml-12 mt-10 flex-col items-center
         justify-center mm:max-md:ml-0 "
        >
          <h1 className="font-righ text-5xl uppercase text-white mm:max-md:text-center mm:max-md:mb-5 ">
            nossos serviços
          </h1>
          {/* Transporte de passageiros */}
          {!isWitdh ? (
            <>
              <ServiceSection
                title="Transporte de passageiros"
                items={["Ônibus", "Microônibus", "Vans"]}
                imageSrc={onibusComil}
              />

              <ServiceSection
                title="Terceirização da frota"
                items={[
                  "Polo",
                  "Voyage",
                  "Gol",
                  "Ranger",
                  "Strada",
                  "Hilux",
                  "Cronos",
                  "Pulse",
                  "Jipe",
                ]}
                imageSrc={carServices}
              />

              <ServiceSection
                title="Transporte escolar"
                items={["Ônibus", "Microônibus", "Vans"]}
                imageSrc={escolar}
              />

              <ServiceSection
                title="Locação de máquinas e equipamentos"
                items={[
                  "Escavadeira hidráulica",
                  "Retroescavadeira",
                  "Pá carregadeira",
                  "Motoniveladora (Patrol)",
                  "Rolo compactador",
                ]}
                imageSrc={pesados}
              />

              <ServiceSection
                title="Locação de trator"
                items={[
                  "Escavadeira hidráulica",
                  "Retroescavadeira",
                  "Pá carregadeira",
                  "Motoniveladora (Patrol)",
                  "Rolo compactador",
                ]}
                imageSrc={trator}
              />
            </>
          ) : (
            <SlidersServicos />
          )}
        </section>
      </div>
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-full
       bg-white text-center mt-3 text-sm shadow-2xl shadow-black"
      >
        <div className="w-full items-center justify-center flex p-5 gap-5">
          <div className="w-1/2">
            <strong className="text-custom-blue-dark text-2xl font-bold mm:max-md:text-sm">
              NOSSO ENDEREÇO
            </strong>
            <p className="font-bold text-2xl text-center mm:max-md:text-xs">
              Avenida Erotildes Noer de Aragçai 2274. Bairro Jardim do Sertão.
              Nossa Senhora da Glória - SE CEP: 49680-000.
            </p>
          </div>
          <img
            className="w-96 mm:max-md:w-1/2"
            src={logo}
            alt="sertão transportes"
          />
        </div>
      </motion.div>
    </main>
  );
}

const ServiceSection = ({ title, items, imageSrc }: PropsDados) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transition: "opacity 1s ease-in-out",
      }}
      className="flex items-center justify-between my-32"
    >
      <div className="w-1/2">
        <p
          className="font-righ text-5xl text-white
         flex gap-2 mm:max-md:text-xl mm:max-md:text-custom-blue-dark"
        >
          <FaCheck />
          {title};
        </p>
        <br />
        {items.map((item, index) => (
          <p
            key={index}
            className="font-righ text-5xl text-white
             mm:max-md:text-xl mm:max-md:text-custom-blue-dark"
          >
            • {item}
          </p>
        ))}
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <img
          className="w-3/4"
          src={imageSrc}
          alt={`Imagem do serviço ${title}`}
        />
      </div>
    </motion.div>
  );
};
