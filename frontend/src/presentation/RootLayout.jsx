import { Outlet, ScrollRestoration } from "react-router";

/** Raiz das rotas: cada navegação abre a tela no topo (e "voltar" devolve a rolagem anterior). */
export function RootLayout() {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
}
