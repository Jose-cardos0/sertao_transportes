//images
import { useEffect, useState } from "react";
import logoSertao from "../assets/nossahistoria/logoSertaoBranca.png";
import onibusSertao from "../assets/nossahistoria/onibusSertao.jpg";

//animate
import { motion } from "framer-motion";

export function NossaHistoria() {
  const [isWidth, setWidth] = useState<boolean>();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setWidth(true);
      } else setWidth(false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="animated-bg min-h-height-full-16px w-full flex items-center justify-center">
      <section
        className="flex justify-center items-center 
      min-w-full min-h-full mm:max-md:flex-col "
      >
        <text className="animated-bg h-full w-2/3 flex-col ml-16 mm:max-md:w-full mm:max-md:mx-2 mm:max-md:px-4 ">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mm:max-md:mt-10"
          >
            <h1 className="font-righ text-5xl uppercase text-white mt-16 mm:max-md:mt-0">
              conheça <br /> nossa história
            </h1>
          </motion.div>
          <br />
          <div>
            <div className="flex-col">
              <motion.p
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="font-robotoC text-2xl flex
                 text-white text-justify mm:max-md:text-base "
              >
                Nossa história teve início em 2011 quando fundamos a Sertão
                Turismo (atualmente Sertão Transportes) e compramos os primeiros{" "}
                3(três) ônibus, seguidos de 01 micro-ônibus e 01 van, fazendo{" "}
                apenas o serviço de fretamento para jogos, festas e turismo,{" "}
                começando assim nossa trajetória com 03 funcionários. Com muito{" "}
                trabalho e dedicação em 2012 construimos nossa garagem para a{" "}
                guarda dos veículos e escritório.
              </motion.p>
              {isWidth ? (
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="mt-5"
                >
                  <img
                    className="w-full"
                    src={onibusSertao}
                    alt="Onibus sertão turismo"
                  />
                  <p className="text-center font-light italic">
                    ônibus Paradiso - uma das primeiras aquisições da empresa.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeInOut" }}
                  className="mt-5 hidden"
                >
                  <img
                    className="w-1/2 items-center mx-auto"
                    src={onibusSertao}
                    alt=""
                  />
                  <p className="text-center font-light italic">
                    ônibus Paradiso - uma das primeiras aquisições da empresa.
                  </p>
                </motion.div>
              )}
            </div>
            <br />
            <motion.p
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="font-robotoC text-2xl
               text-white text-justify mm:max-md:text-base mm:max-md:mb-10 mb-10"
            >
              No ano de 2014 iniciamos a diversificação dos nossos serviços,{" "}
              passando a atuar no ramo da locação de veículos. Em 2017 a empresa
              ampliou ainda mais seu raio de atuação, com a prestação de serviço
              para a administração pública fora do Estado de Sergipe. Nos anos
              seguintes apresentamos uma crescente escala de progresso. <br />{" "}
              De pequena empresa a Sertão passou a atuar em diversas áreas do
              transporte, identificando as oportunidades de mercado e ampliando
              seu leque de serviços.
            </motion.p>
          </div>
        </text>
        <aside className="flex min-h-full items-end justify-center mm:max-md:-mt-40 ">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-1/2 min-h-height-full-16px flex
             items-center justify-center  mm:max-md:hidden "
          >
            <div className="relative">
              <img
                className="w-full flex items-center justify-center"
                src={onibusSertao}
                alt="Onibus sertão turismo"
              />
              <p className="text-center font-light italic">
                ônibus Paradiso - uma das primeiras aquisições da empresa.
              </p>
              <img
                className="absolute bottom-10 w-10/12
              right-10 drop-shadow-2xl animate-bounce mm:max-md:right-0 mm:max-md:p-7 
              mm:max-md:mb-11 mm:max-md:w-full mm:max-md:bottom-10"
                src={logoSertao}
                alt=""
              />
            </div>
          </motion.div>
        </aside>
      </section>
    </main>
  );
}
