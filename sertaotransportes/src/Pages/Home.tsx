//images
import bgEstradaHome from "../assets/home/bgEstrada.png";
import triangleCars from "../assets/home/triangulo.png";
import artOct from "../assets/home/arteOct.png";

export function Home() {
  return (
    <main
      style={{
        backgroundImage: `url(${bgEstradaHome})`,
      }}
      className=" min-h-height-full-16px 
      min-w-full bg-cover
       bg-no-repeat
        bg-center flex overflow-y-hidden overflow-x-hidden"
    >
      <h1
        className="absolute z-10 w-full
       text-white font-righ text-5xl
        flex items-center justify-start ml-11 min-h-height-full-16px "
      >
        EMPRESA ESPECIALIZADA <br /> EM FORNECER SOLUÇÕES <br /> TRANSPORTE PARA
        DIVERSAS <br /> NECESSODADES <br />
        <br />
        MODERNA FROTA DE VANS, <br /> MICRO-ÔNIBUS, ÔNIBUS, <br />
        CARROS E MÁQUINAS.
      </h1>

      <div
        style={{ backgroundImage: `url(${artOct})` }}
        className="min-h-height-full-16px
         bg-cover bg-no-repeat w-full flex items-center "
      ></div>

      <div
        className="min-h-height-full-16px
           bg-no-repeat w-full flex 
           drop-shadow-2xl justify-end "
      >
        <div
          style={{ backgroundImage: `url(${triangleCars})` }}
          className="min-h-height-full-16px
           bg-no-repeat w-2/3 flex 
           drop-shadow-2xl bg-cover "
        ></div>
      </div>
    </main>
  );
}
