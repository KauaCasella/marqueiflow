// CLT-01 — Clientes (só a tela; dados de exemplo do Figma)
import { useState } from "react";
import { PainelLayout } from "@/presentation/components/painel/PainelLayout";
import { ListaClientes } from "@/presentation/components/clientes/ListaClientes";
import { SegmentedControl } from "@/presentation/components/ui/SegmentedControl";
import buscaIcon from "@/presentation/assets/icons/busca-18.svg";

// Exemplo até existir back-end.
const FILTROS = [
  { value: "todos", label: "Todos", count: 128 },
  { value: "sumidos", label: "Sumidos", count: 4 },
  { value: "novos", label: "Novos", count: 9 },
];

const CLIENTES = [
  {
    id: 1,
    iniciais: "LA",
    nome: "Lucas Andrade",
    ultimaVisita: "Hoje, 16:30 · 8 visitas",
    total: "R$ 420",
  },
  {
    id: 2,
    iniciais: "MC",
    nome: "Mateus Costa",
    ultimaVisita: "Há 12 dias · 5 visitas",
    total: "R$ 250",
  },
  {
    id: 3,
    iniciais: "PA",
    nome: "Pedro Alves",
    ultimaVisita: "Há 18 dias · 11 visitas",
    total: "R$ 610",
  },
  {
    id: 4,
    iniciais: "RS",
    nome: "Rafael Santos",
    ultimaVisita: "Há 34 dias · 3 visitas",
    total: "R$ 140",
    sumido: true,
  },
  {
    id: 5,
    iniciais: "GN",
    nome: "Gabriel Nunes",
    ultimaVisita: "Há 41 dias · 6 visitas",
    total: "R$ 300",
    sumido: true,
  },
];

export default function ClientesPage() {
  const [filtro, setFiltro] = useState("todos");
  const [busca, setBusca] = useState("");

  return (
    <PainelLayout aba="clientes" className="gap-4 pt-5">
      <header className="flex items-end justify-between">
        <h1 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.96px] text-ink">
          Clientes
        </h1>
        <p className="text-sm font-medium text-ink-2">128 no total</p>
      </header>

      <label className="flex h-12 items-center gap-2.5 rounded-[14px] border border-line bg-surface px-3.5 focus-within:border-ink">
        <img src={buscaIcon} alt="" width={18} height={18} />
        <input
          type="search"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Buscar por nome ou WhatsApp"
          aria-label="Buscar cliente"
          className="h-full min-w-0 flex-1 bg-transparent text-[15px] text-ink outline-none placeholder:text-ink-2"
        />
      </label>

      <SegmentedControl
        label="Filtrar clientes"
        options={FILTROS}
        value={filtro}
        onChange={setFiltro}
      />

      <section className="flex items-center gap-3 rounded-2xl bg-accent-soft px-4 py-3.5">
        <div className="flex min-w-0 flex-1 flex-col gap-[3px]">
          <p className="text-sm leading-[1.35] font-semibold text-ink">
            4 clientes não voltam há mais de 30 dias
          </p>
          <p className="text-[13px] leading-[normal] text-ink-2">
            Uma mensagem costuma trazer metade de volta.
          </p>
        </div>
        {/* TODO(CLT-01): mandar mensagem para os clientes sumidos. */}
        <button
          type="button"
          className="relative flex h-10 shrink-0 pressable items-center rounded-xl bg-ink px-3.5 text-sm font-semibold tracking-[-0.14px] text-surface before:absolute before:inset-x-0 before:-inset-y-0.5"
        >
          Chamar
        </button>
      </section>

      {/* TODO(CLT-01): tocar no cliente abre os detalhes dele. */}
      <ListaClientes clientes={CLIENTES} />
    </PainelLayout>
  );
}
