//icons
import { FaCheck } from "react-icons/fa6";
import React from "react";

//motions
import { motion, useInView } from "framer-motion";

//images
import onibusComil from "../assets/Servicos/onibusRodoviarioComil.png";
import carServices from "../assets/Servicos/carsServices.png";
import escolar from "../assets/Servicos/escolar.png";
import pesados from "../assets/Servicos/maquinarioPesado.png";
import trator from "../assets/Servicos/trator.png";

//composntes
import { Header } from "../components/Header";
import { BgComponentServices } from "../components/BgComponentServices";

interface PropsDados {
  title: string;
  items: string[];
  imageSrc: string;
}

export function Servicos() {
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
          <h1 className="font-righ text-5xl uppercase text-white">
            nossos serviços
          </h1>
          {/* Transporte de passageiros */}
          <ServiceSection
            title="Transporte de passageiros"
            items={["Ônibus", "Microônibus", "Vans"]}
            imageSrc={onibusComil}
          />

          {/* Terceirização da frota */}
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

          {/* Transporte escolar */}
          <ServiceSection
            title="Transporte escolar"
            items={["Ônibus", "Microônibus", "Vans"]}
            imageSrc={escolar}
          />

          {/* Locação de máquinas e equipamentos */}
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

          {/* Locação de trator */}
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
        </section>
      </div>
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
        <p className="font-righ text-5xl text-white flex gap-2">
          <FaCheck />
          {title};
        </p>
        <br />
        {items.map((item, index) => (
          <p key={index} className="font-righ text-5xl text-white">
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
