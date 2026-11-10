// ONB-01..05 — Cadastro (um passo por URL: /cadastro/1 … /cadastro/4)
import { useParams } from "react-router";
import { SeuNegocioStep } from "@/presentation/components/cadastro/SeuNegocioStep";
import { ServicosStep } from "@/presentation/components/cadastro/ServicosStep";
import { HorariosStep } from "@/presentation/components/cadastro/HorariosStep";
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
      // Próxima tela: 4 Pix e sinal.
      return (
        <main className="mx-auto max-w-md p-6">
          <p className="text-sm text-ink-3">ONB · passo {passo}</p>
          <h1 className="text-2xl font-semibold text-ink">Cadastro {passo}/4</h1>
        </main>
      );
    default:
      return <NotFoundPage />;
  }
}
