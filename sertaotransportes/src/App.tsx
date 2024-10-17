import { createBrowserRouter } from "react-router-dom";

//pages
import { Layout } from "./components/Layout";
import { Home } from "./Pages/Home";
import { Welcome } from "./Pages/Welcome";

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
    ],
  },
]);

export { router };
