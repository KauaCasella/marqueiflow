// Rotas de entrada e cadastro do profissional.
// logoInicio: nessas telas, tocar na logo do topo volta para a página inicial (landing).
import {
  CadastroNovoServicoPage,
  CadastroPassoPage,
  CadastroProntoPage,
  EntrarPage,
} from "@/presentation/pages/auth";

export const cadastroRoutes = [
  { path: "/entrar", element: <EntrarPage />, handle: { semLogo: true } }, // AUTH-03
  { path: "/cadastro/:passo", element: <CadastroPassoPage />, handle: { logoInicio: true } }, // ONB-01..04
  {
    path: "/cadastro/servicos/novo",
    element: <CadastroNovoServicoPage />,
    handle: { logoInicio: true },
  }, // ONB-02 (form de AJ-03)
  { path: "/cadastro/pronto", element: <CadastroProntoPage />, handle: { logoInicio: true } }, // ONB-06
];
