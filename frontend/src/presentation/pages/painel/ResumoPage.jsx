// RES-01 — Resumo do mês (só a tela; dados de exemplo do Figma)
import { Fragment } from "react";
import { PainelLayout } from "@/presentation/components/painel/PainelLayout";
import { DiasMaisCheios } from "@/presentation/components/resumo/DiasMaisCheios";
import { IconButton } from "@/presentation/components/ui/IconButton";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { ListRow } from "@/presentation/components/ui/ListRow";
import setaEsquerda from "@/presentation/assets/icons/seta-esquerda-16.svg";
import setaDireita from "@/presentation/assets/icons/seta-direita-16.svg";

// Exemplo até existir back-end.
const NUMEROS = [
  { id: "atendimentos", valor: "96", label: "atendimentos" },
  { id: "faltas", valor: "4%", label: "de faltas" },
  { id: "ticket", valor: "R$ 44", label: "ticket médio" },
];

const DIAS = [
  { id: "seg", label: "Seg", altura: 36 },
  { id: "ter", label: "Ter", altura: 29 },
  { id: "qua", label: "Qua", altura: 39 },
  { id: "qui", label: "Qui", altura: 45 },
  { id: "sex", label: "Sex", altura: 65 },
  { id: "sab", label: "Sáb", altura: 84, destaque: true, valor: 26 },
  { id: "dom", label: "Dom", altura: 13 },
];

const MAIS_VENDIDOS = [
  { id: "corte-barba", nome: "Corte + barba", vezes: "42 vezes", total: "R$ 2.520" },
  { id: "corte", nome: "Corte", vezes: "31 vezes", total: "R$ 1.240" },
];

export default function ResumoPage() {
  return (
    <PainelLayout aba="resumo" className="gap-5.5 pt-5">
      <header className="flex items-end justify-between">
        <h1 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.96px] text-ink">
          Novembro
        </h1>
        {/* TODO(RES-01): trocar de mês. */}
        <div className="flex gap-2">
          <IconButton
            icon={setaEsquerda}
            iconSize={16}
            label="Mês anterior"
            className="size-9 before:-inset-1"
          />
          <IconButton
            icon={setaDireita}
            iconSize={16}
            label="Próximo mês"
            className="size-9 before:-inset-1"
          />
        </div>
      </header>

      <section className="flex flex-col gap-1.5 leading-[normal]">
        <p className="text-sm font-medium text-ink-2">Faturado até hoje</p>
        <p className="text-[48px] leading-[1.05] font-semibold tracking-[-1.92px] text-ink tabular-nums">
          R$ 4.280
        </p>
        <p className="flex gap-1.5 text-sm">
          <span className="font-semibold text-success">+12%</span>
          <span className="text-ink-2">em relação a outubro, no mesmo dia</span>
        </p>
      </section>

      <section className="flex rounded-2xl border border-line bg-surface leading-[normal]">
        {NUMEROS.map((n, i) => (
          <Fragment key={n.id}>
            {i > 0 && <div className="w-px self-stretch bg-line" aria-hidden="true" />}
            <div className="flex min-w-0 flex-1 flex-col gap-0.5 py-3.5 pr-3 pl-4">
              <p className="text-[22px] font-semibold tracking-[-0.44px] text-ink tabular-nums">
                {n.valor}
              </p>
              <p className="text-[13px] text-ink-2">{n.label}</p>
            </div>
          </Fragment>
        ))}
      </section>

      <section className="flex flex-col gap-3.5">
        <div className="flex items-center justify-between leading-[normal]">
          <h2 className="text-[17px] font-semibold tracking-[-0.17px] text-ink">
            Dias mais cheios
          </h2>
          <p className="text-sm font-medium text-ink-2">Sábado lidera</p>
        </div>
        <DiasMaisCheios dias={DIAS} />
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-[17px] leading-[normal] font-semibold tracking-[-0.17px] text-ink">
          Mais vendidos
        </h2>
        <ListGroup inset className="leading-[normal]">
          {MAIS_VENDIDOS.map((s) => (
            <ListRow
              key={s.id}
              size="md"
              rowClassName="py-[13px]"
              title={s.nome}
              description={s.vezes}
              trailing={s.total}
            />
          ))}
        </ListGroup>
      </section>
    </PainelLayout>
  );
}
