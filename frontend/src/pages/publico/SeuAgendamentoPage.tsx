// CLI-02 — Seu agendamento
import { useParams } from "react-router";

export default function SeuAgendamentoPage() {
  const { token } = useParams();

  return (
    <main className="mx-auto max-w-md p-6">
      <p className="text-sm text-ink-3">CLI-02</p>
      <h1 className="text-2xl font-semibold text-ink">Seu agendamento</h1>
      <p className="mt-2 text-ink-2">{token}</p>
    </main>
  );
}
