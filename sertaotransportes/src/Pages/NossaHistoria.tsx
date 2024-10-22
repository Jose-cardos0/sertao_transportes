//images
import caminhaoAzul from "../assets/nossahistoria/caminhaoAzul.svg";
import logoSertao from "../assets/nossahistoria/logoSertaoBranca.png";

//animate
import { motion } from "framer-motion";

export function NossaHistoria() {
  return (
    <main className="animated-bg min-h-height-full-16px w-full flex items-center justify-center">
      <section className="flex justify-between items-center min-w-full min-h-full overflow-hidden mm:max-md:flex-col ">
        <text className="h-full w-1/2 flex-col ml-16 mm:max-md:w-full mm:max-md:mx-2 mm:max-md:px-4 ">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="mm:max-md:mt-10"
          >
            <h1 className="font-righ text-5xl uppercase text-white">
              conheça <br /> nossa história
            </h1>
          </motion.div>
          <br />
          <div>
            <motion.p
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="font-robotoC text-2xl text-white text-justify"
            >
              Nossa história teve início em 2011 quando fundamos a Sertão
              Turismo (atualmente Sertão Transportes) e compramos os primeiros{" "}
              3(três) ônibus, seguidos de 01 micro-ônibus e 01 van, fazendo{" "}
              apenas o serviço de fretamento para jogos, festas e turismo,{" "}
              começando assim nossa trajetória com 03 funcionários. Com muito{" "}
              trabalho e dedicação em 2012 construimos nossa garagem para a{" "}
              guarda dos veículos e escritório.
            </motion.p>
            <br />
            <motion.p
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="font-robotoC text-2xl text-white text-justify"
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
        <aside className="flex min-h-full items-end justify-end ">
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="w-full h-full bg-cover bg-center relative flex "
          >
            <img
              className="w-full opacity min-h-height-full-16px
               drop-shadow-2xl"
              src={caminhaoAzul}
              alt="caminhão caçamba sertão transportes cover"
            />
            <img
              className="absolute bottom-10 right-10 drop-shadow-2xl animate-bounce mm:max-md:right-0 mm:max-md:p-7 "
              src={logoSertao}
              alt=""
            />
          </motion.div>
        </aside>
      </section>
    </main>
  );
}
