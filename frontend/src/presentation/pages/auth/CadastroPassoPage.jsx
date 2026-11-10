// ONB-01..05 — Cadastro (um passo por URL: /cadastro/1 … /cadastro/4)
import { useParams } from "react-router";
import { SeuNegocioStep } from "@/presentation/components/cadastro/SeuNegocioStep";
import NotFoundPage from "@/presentation/pages/NotFoundPage";
export default function CadastroPassoPage() {
  const { passo } = useParams();
  switch (passo) {
    case "1":
      return <SeuNegocioStep />;
    case "2":
    case "3":
    case "4":
      // Próximas telas: 2 serviços, 3 horários, 4 Pix e sinal.
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
