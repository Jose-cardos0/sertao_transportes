import { createBrowserRouter } from "react-router-dom";

//pages
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import { Welcome } from "./Pages/Welcome";
import { NossaHistoria } from "./Pages/NossaHistoria";
import { Institucional } from "./Pages/Institucional";
import { Servicos } from "./Pages/Serviços";
import { Certificados } from "./Pages/Certificados";
import { TrabalheConosco } from "./Pages/TrabalheConosco";
import { Contato } from "./Pages/Contatos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/nossa-historia",
        element: <NossaHistoria />,
      },
      {
        path: "/institucional",
        element: <Institucional />,
      },
      {
        path: "/servicos",
        element: <Servicos />,
      },
      {
        path: "certificados",
        element: <Certificados />,
      },
      {
        path: "trabalhe-conosco",
        element: <TrabalheConosco />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
    ],
  },
]);

export { router };
