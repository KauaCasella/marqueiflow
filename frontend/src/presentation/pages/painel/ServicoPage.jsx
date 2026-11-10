// AJ-03 — Serviço
import { useParams } from "react-router";
export default function ServicoPage() {
  const { id } = useParams();
  return (
    <main className="mx-auto max-w-md p-6">
      <p className="text-sm text-ink-3">AJ-03</p>
      <h1 className="text-2xl font-semibold text-ink">Serviço</h1>
      <p className="mt-2 text-ink-2">{id}</p>
    </main>
  );
}
