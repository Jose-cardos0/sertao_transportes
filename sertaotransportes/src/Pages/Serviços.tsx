import { Footer } from "../components/Footer";

//images
import { BgComponentServices } from "../components/BgComponentServices";

import { Header } from "../components/Header";

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
      <div className="relative z-10 ">
        <Header />
        <h1>OLA</h1>
        <p>Este é o conteúdo que aparece sobre o fundo.</p>
      </div>

      {/* Se você quiser incluir o Footer, pode fazer isso aqui */}
      <footer className="bg-white flex items-end justify-end">
        <Footer />
      </footer>
    </main>
  );
}
