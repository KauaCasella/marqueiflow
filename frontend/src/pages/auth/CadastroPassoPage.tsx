// ONB-01..05 — Cadastro
import { useParams } from "react-router";

export default function CadastroPassoPage() {
  const { passo } = useParams();

  return (
    <main className="mx-auto max-w-md p-6">
      <p className="text-sm text-ink-3">ONB-01..05</p>
      <h1 className="text-2xl font-semibold text-ink">Cadastro</h1>
      <p className="mt-2 text-ink-2">{passo}</p>
    </main>
  );
}
