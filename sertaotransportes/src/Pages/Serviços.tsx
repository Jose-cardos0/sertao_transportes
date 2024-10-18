import { Footer } from "../components/Footer";

//icons
import { FaCheck } from "react-icons/fa6";

//images
import onibusComil from "../assets/Servicos/onibusRodoviarioComil.png";
import carServices from "../assets/Servicos/carsServices.png";

//composntes
import { Header } from "../components/Header";
import { BgComponentServices } from "../components/BgComponentServices";

export function Servicos() {
  return (
    <main
      style={{ backgroundColor: "#D2E2EC" }}
      className="min-w-full min-h-height-full-16px relative"
    >
      {/* Div para o fundo com o componente */}
      <div className="absolute inset-0 z-0">
        <BgComponentServices />
      </div>

      {/* Div para o conteúdo que ficará por cima */}
      <div className="relative flex-col z-10 ">
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
          <div className="flex items-center justify-between">
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
          </div>
          {/*divs terceirização da frota */}
          <div className="flex items-center justify-between">
            <div className="w-1/2">
              <p
                className="font-righ 
        text-5xl  text-white flex gap-2 "
              >
                <p>
                  <FaCheck /> Terceirização da frota.
                </p>
                <p>
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
          </div>
        </section>
      </div>

      {/* Se você quiser incluir o Footer, pode fazer isso aqui */}
      <footer className="bg-white flex items-end justify-end">
        <Footer />
      </footer>
    </main>
  );
}
