import { Outlet, ScrollRestoration, useMatches } from "react-router";
import { Logo } from "@/presentation/components/ui/Logo";

/**
 * Raiz das rotas: cada navegação abre a tela no topo (e "voltar" devolve a rolagem anterior).
 * Em cima de toda tela vai a faixa com a logo no canto direito. Telas que já mostram a logo
 * grande (Entrar, início, link não encontrado) marcam a rota com handle: { semLogo: true }.
 */
export function RootLayout() {
  const matches = useMatches();
  const semLogo = matches.some((m) => m.handle?.semLogo);

  return (
    <div className="flex min-h-dvh flex-col">
      <ScrollRestoration />
      {!semLogo && (
        <div className="mx-auto flex w-full max-w-[430px] justify-end bg-paper px-5 pt-3">
          <Logo className="text-[15px] leading-none tracking-[-0.04em]" />
        </div>
      )}
      <Outlet />
    </div>
  );
}
