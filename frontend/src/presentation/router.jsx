import { createBrowserRouter } from "react-router";
import HomePage from "@/presentation/pages/HomePage";
import NotFoundPage from "@/presentation/pages/NotFoundPage";
import ComponentesPage from "@/presentation/pages/ComponentesPage";
import ProfissionalPage from "@/presentation/pages/publico/ProfissionalPage";
import EscolherHorarioPage from "@/presentation/pages/publico/EscolherHorarioPage";
import SeusDadosPage from "@/presentation/pages/publico/SeusDadosPage";
import AgendamentoProntoPage from "@/presentation/pages/publico/AgendamentoProntoPage";
import SeuAgendamentoPage from "@/presentation/pages/publico/SeuAgendamentoPage";
import RemarcarPage from "@/presentation/pages/publico/RemarcarPage";
import MeusHorariosPage from "@/presentation/pages/publico/MeusHorariosPage";
import EntrarPage from "@/presentation/pages/auth/EntrarPage";
import CadastroPassoPage from "@/presentation/pages/auth/CadastroPassoPage";
import CadastroProntoPage from "@/presentation/pages/auth/CadastroProntoPage";
import AgendaHojePage from "@/presentation/pages/painel/AgendaHojePage";
import SemanaPage from "@/presentation/pages/painel/SemanaPage";
import ClientesPage from "@/presentation/pages/painel/ClientesPage";
import ResumoPage from "@/presentation/pages/painel/ResumoPage";
import AjustesPage from "@/presentation/pages/painel/AjustesPage";
import ServicosPage from "@/presentation/pages/painel/ServicosPage";
import ServicoPage from "@/presentation/pages/painel/ServicoPage";
import HorariosPage from "@/presentation/pages/painel/HorariosPage";
import PrivacidadePage from "@/presentation/pages/legal/PrivacidadePage";
import TermosPage from "@/presentation/pages/legal/TermosPage";
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
