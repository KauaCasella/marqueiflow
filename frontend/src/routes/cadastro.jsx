// Rotas de entrada e cadastro do profissional.
import {
  CadastroNovoServicoPage,
  CadastroPassoPage,
  CadastroProntoPage,
  EntrarPage,
} from "@/presentation/pages/auth";

export const cadastroRoutes = [
  { path: "/entrar", element: <EntrarPage /> }, // AUTH-03
  { path: "/cadastro/:passo", element: <CadastroPassoPage /> }, // ONB-01..04
  { path: "/cadastro/servicos/novo", element: <CadastroNovoServicoPage /> }, // ONB-02 (form de AJ-03)
  { path: "/cadastro/pronto", element: <CadastroProntoPage /> }, // ONB-06
];
