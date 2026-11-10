// ONB-01..05 — Cadastro (um passo por URL: /cadastro/1 … /cadastro/4)
import { useParams } from "react-router";
import { SeuNegocioStep } from "@/presentation/components/cadastro/SeuNegocioStep";
import { ServicosStep } from "@/presentation/components/cadastro/ServicosStep";
import { HorariosStep } from "@/presentation/components/cadastro/HorariosStep";
import { PixStep } from "@/presentation/components/cadastro/PixStep";
import NotFoundPage from "@/presentation/pages/NotFoundPage";

export default function CadastroPassoPage() {
  const { passo } = useParams();

  switch (passo) {
    case "1":
      return <SeuNegocioStep />;
    case "2":
      return <ServicosStep />;
    case "3":
      return <HorariosStep />;
    case "4":
      return <PixStep />;
    default:
      return <NotFoundPage />;
  }
}
