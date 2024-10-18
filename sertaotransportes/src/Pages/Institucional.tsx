import { useState } from "react";
//motion
import { motion } from "framer-motion";
//images
import elipse from "../assets/institucional/Ellipse.png";
import vanSertao from "../assets/institucional/vanSertao.png";

export function Institucional() {
  const [animationStep, setAnimationStep] = useState(0);
  const [motionStepVan, setAnimationStepVan] = useState(0);

  return (
    <main className="animated-bg min-h-height-full-16px w-full flex items-center justify-center">
      <section className="flex justify-between items-center min-w-full min-h-full overflow-hidden ">
        <div className="h-full w-1/2 flex-col ml-16 ">
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (animationStep === 0) {
                setAnimationStep(1);
              }
            }}
          >
            <h1 className="font-righ text-5xl uppercase text-white">
              institucional
            </h1>
          </motion.div>
          <br />
          <div>
            {animationStep >= 1 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                onAnimationComplete={() => {
                  setAnimationStep(2);
                }}
                className="font-robotoC text-2xl text-white text-justify"
              >
                Sertão Transportes é uma empresa especializada em oferecer
                soluções inteligentes de transporte, sempre priorizando
                qualidade e segurança. Com um compromisso sólido com nossos
                clientes, garantimos que cada operação seja realizada de forma
                eficiente, atendendo às mais diversas demandas do setor
                logístico. <br />
                <br />
                MISSÃO: Oferecer ao mercado de transportes um serviço de
                qualidade e segurança, promovendo soluções inteligentes de
                movimento que otimizem o tempo e os recursos dos nossos
                parceiros.
              </motion.p>
            )}
            <br />
            {animationStep >= 2 && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="font-robotoC text-2xl text-white text-justify"
              >
                VISÃO: Ser reconhecida em diversas regiões do território
                nacional como referência em transporte, mantendo-se em constante
                evolução nas ofertas de serviços e soluções que atendam às novas
                demandas do mercado. <br />
                <br />
                VALORES: <br />
                • Inovação: Sempre buscamos novas práticas que melhorem nossos
                processos e entregas. <br /> • Comprometimento: Valorizamos a
                confiança dos nossos clientes e estamos empenhados em superá-la.{" "}
                <br />
                • Melhoria Contínua: Estamos constantemente aperfeiçoando nossos
                serviços para garantir a máxima eficiência. <br />• Lucro:
                Acreditamos que o sucesso sustentável é resultado da combinação
                de práticas inovadoras e clientes satisfeitos.
              </motion.p>
            )}
          </div>
        </div>
        <aside className="flex min-h-full items-end justify-end ">
          <div className="w-full h-full bg-cover bg-center relative flex mr-20 ">
            <motion.img
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
              onAnimationComplete={() => {
                if (motionStepVan === 0) {
                  setAnimationStepVan(1);
                }
              }}
              className="w-11/12"
              src={elipse}
              alt="caminhão caçamba sertão transportes cover"
            />
            {motionStepVan >= 1 && (
              <motion.img
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute top-24 right-4 drop-shadow-2xl w-full "
                src={vanSertao}
                alt=""
              />
            )}
          </div>
        </aside>
      </section>
    </main>
  );
}
