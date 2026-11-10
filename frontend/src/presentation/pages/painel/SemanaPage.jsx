// AG-03 — Semana (só a tela; dados de exemplo do Figma)
// As setas trocam entre 3 semanas de exemplo: a anterior, a atual e a próxima.
import { useState } from "react";
import { PainelLayout } from "@/presentation/components/painel/PainelLayout";
import { VisaoAgenda } from "@/presentation/components/agenda/VisaoAgenda";
import { SemanaDias } from "@/presentation/components/agenda/SemanaDias";
import { IconButton } from "@/presentation/components/ui/IconButton";
import setaEsquerda from "@/presentation/assets/icons/seta-esquerda-16.svg";
import setaDireita from "@/presentation/assets/icons/seta-direita-16.svg";

// Exemplo até existir back-end.
const SEMANAS = [
  {
    periodo: "2 a 8 de novembro",
    resumo: "38 atendimentos · R$ 2.120 faturados",
    dias: [
      { id: "seg", semana: "Seg", dia: 2, ocupados: 8, total: 18 },
      { id: "ter", semana: "Ter", dia: 3, ocupados: 6, total: 18 },
      { id: "qua", semana: "Qua", dia: 4, ocupados: 5, total: 18 },
      { id: "qui", semana: "Qui", dia: 5, ocupados: 7, total: 18 },
      { id: "sex", semana: "Sex", dia: 6, ocupados: 10, total: 20 },
      { id: "sab", semana: "Sáb", dia: 7, ocupados: 16, total: 16, aviso: "Lotado" },
      { id: "dom", semana: "Dom", dia: 8, fechado: true },
    ],
  },
  {
    periodo: "9 a 15 de novembro",
    resumo: "34 atendimentos · R$ 1.940 previstos",
    dias: [
      { id: "seg", semana: "Seg", dia: 9, ocupados: 6, total: 18, hoje: true },
      { id: "ter", semana: "Ter", dia: 10, ocupados: 5, total: 18 },
      { id: "qua", semana: "Qua", dia: 11, ocupados: 4, total: 18 },
      { id: "qui", semana: "Qui", dia: 12, ocupados: 7, total: 18 },
      { id: "sex", semana: "Sex", dia: 13, ocupados: 9, total: 20 },
      { id: "sab", semana: "Sáb", dia: 14, ocupados: 15, total: 16, aviso: "Quase lotado" },
      { id: "dom", semana: "Dom", dia: 15, fechado: true },
    ],
  },
  {
    periodo: "16 a 22 de novembro",
    resumo: "12 atendimentos · R$ 690 previstos",
    dias: [
      { id: "seg", semana: "Seg", dia: 16, ocupados: 2, total: 18 },
      { id: "ter", semana: "Ter", dia: 17, ocupados: 1, total: 18 },
      { id: "qua", semana: "Qua", dia: 18, ocupados: 3, total: 18 },
      { id: "qui", semana: "Qui", dia: 19, ocupados: 1, total: 18 },
      { id: "sex", semana: "Sex", dia: 20, ocupados: 2, total: 20 },
      { id: "sab", semana: "Sáb", dia: 21, ocupados: 3, total: 16 },
      { id: "dom", semana: "Dom", dia: 22, fechado: true },
    ],
  },
];

const ATUAL = 1;

export default function SemanaPage() {
  const [indice, setIndice] = useState(ATUAL);
  const semana = SEMANAS[indice];

  return (
    <PainelLayout aba="agenda" className="gap-4.5">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="text-[13px] font-medium text-ink-2" aria-live="polite">
            {semana.periodo}
          </p>
          <h1 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.96px] text-ink">
            Semana
          </h1>
        </div>
        <div className="flex gap-2">
          <IconButton
            icon={setaEsquerda}
            iconSize={16}
            label="Semana anterior"
            onClick={() => setIndice((i) => i - 1)}
            disabled={indice === 0}
            className="size-9 before:-inset-1"
          />
          <IconButton
            icon={setaDireita}
            iconSize={16}
            label="Próxima semana"
            onClick={() => setIndice((i) => i + 1)}
            disabled={indice === SEMANAS.length - 1}
            className="size-9 before:-inset-1"
          />
        </div>
      </header>

      <VisaoAgenda ativa="semana" />

      <p className="text-sm text-ink-2">{semana.resumo}</p>

      <SemanaDias dias={semana.dias} />
    </PainelLayout>
  );
}
