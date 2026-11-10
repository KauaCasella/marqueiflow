import { createBrowserRouter } from "react-router";
import HomePage from "@/pages/HomePage";
import NotFoundPage from "@/pages/NotFoundPage";
import ComponentesPage from "@/pages/ComponentesPage";
import ProfissionalPage from "@/pages/publico/ProfissionalPage";
import EscolherHorarioPage from "@/pages/publico/EscolherHorarioPage";
import SeusDadosPage from "@/pages/publico/SeusDadosPage";
import AgendamentoProntoPage from "@/pages/publico/AgendamentoProntoPage";
import SeuAgendamentoPage from "@/pages/publico/SeuAgendamentoPage";
import RemarcarPage from "@/pages/publico/RemarcarPage";
import MeusHorariosPage from "@/pages/publico/MeusHorariosPage";
import EntrarPage from "@/pages/auth/EntrarPage";
import CadastroPassoPage from "@/pages/auth/CadastroPassoPage";
import CadastroProntoPage from "@/pages/auth/CadastroProntoPage";
import AgendaHojePage from "@/pages/painel/AgendaHojePage";
import SemanaPage from "@/pages/painel/SemanaPage";
import ClientesPage from "@/pages/painel/ClientesPage";
import ResumoPage from "@/pages/painel/ResumoPage";
import AjustesPage from "@/pages/painel/AjustesPage";
import ServicosPage from "@/pages/painel/ServicosPage";
import ServicoPage from "@/pages/painel/ServicoPage";
import HorariosPage from "@/pages/painel/HorariosPage";
import PrivacidadePage from "@/pages/legal/PrivacidadePage";
import TermosPage from "@/pages/legal/TermosPage";

export const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/:slug", element: <ProfissionalPage /> }, // PUB-01
  { path: "/:slug/agendar", element: <EscolherHorarioPage /> }, // BOOK-01
  { path: "/:slug/agendar/dados", element: <SeusDadosPage /> }, // BOOK-03
  { path: "/:slug/agendar/pronto", element: <AgendamentoProntoPage /> }, // BOOK-05/06
  { path: "/a/:token", element: <SeuAgendamentoPage /> }, // CLI-02
  { path: "/a/:token/remarcar", element: <RemarcarPage /> }, // CLI-03
  { path: "/meus-horarios", element: <MeusHorariosPage /> }, // CLI-01
  { path: "/entrar", element: <EntrarPage /> }, // AUTH-03
  { path: "/cadastro/:passo", element: <CadastroPassoPage /> }, // ONB-01..05
  { path: "/cadastro/pronto", element: <CadastroProntoPage /> }, // ONB-06
  { path: "/painel", element: <AgendaHojePage /> }, // AG-01
  { path: "/painel/semana", element: <SemanaPage /> }, // AG-03
  { path: "/painel/clientes", element: <ClientesPage /> }, // CLT-01
  { path: "/painel/resumo", element: <ResumoPage /> }, // RES-01
  { path: "/painel/ajustes", element: <AjustesPage /> }, // AJ-01
  { path: "/painel/ajustes/servicos", element: <ServicosPage /> }, // AJ-02
  { path: "/painel/ajustes/servicos/:id", element: <ServicoPage /> }, // AJ-03
  { path: "/painel/ajustes/horarios", element: <HorariosPage /> }, // AJ-04
  { path: "/privacidade", element: <PrivacidadePage /> }, // LGL-03
  { path: "/termos", element: <TermosPage /> }, // LGL-03
  { path: "/componentes", element: <ComponentesPage /> },
  { path: "*", element: <NotFoundPage /> },
]);
