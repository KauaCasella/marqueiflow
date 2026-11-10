// Todas as rotas do app, separadas por área. Cada arquivo desta pasta cuida de uma área.
import { createBrowserRouter } from "react-router";
import { RootLayout } from "@/presentation/RootLayout";
import { ComponentesPage, HomePage, NotFoundPage } from "@/presentation/pages";
import { cadastroRoutes } from "./cadastro";
import { legalRoutes } from "./legal";
import { painelRoutes } from "./painel";
import { publicoRoutes } from "./publico";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      ...cadastroRoutes,
      ...painelRoutes,
      ...legalRoutes,
      { path: "/componentes", element: <ComponentesPage /> },
      ...publicoRoutes, // por último: "/:slug" pega qualquer caminho de um nível
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
