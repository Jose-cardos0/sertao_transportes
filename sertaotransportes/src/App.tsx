import { createBrowserRouter } from "react-router-dom";

//protect
import { Protect } from "./components/Protect";

//pages
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import { Welcome } from "./Pages/Welcome";
import { NossaHistoria } from "./Pages/NossaHistoria";
import { Institucional } from "./Pages/Institucional";
import { Servicos } from "./Pages/Serviços";
import { NossoBlog } from "./Pages/Blog";
import { TrabalheConosco } from "./Pages/TrabalheConosco";
import { Contato } from "./Pages/Contatos";
import { Admin } from "./Pages/Admin";
import { BlogAdmin } from "./Pages/BlogAdmin";
import { PostDeatil } from "./Pages/PostDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/servicos",
    element: <Servicos />,
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
        path: "/blogSertao",
        element: <NossoBlog />,
      },
      {
        path: "/postDeatil/:id",
        element: <PostDeatil />,
      },
      {
        path: "trabalhe-conosco",
        element: <TrabalheConosco />,
      },
      {
        path: "contato",
        element: <Contato />,
      },
      {
        path: "admin",
        element: <Admin />,
      },
      {
        path: "/blog-admin",
        element: (
          <Protect>
            <BlogAdmin />,
          </Protect>
        ),
      },
    ],
  },
]);

export { router };
