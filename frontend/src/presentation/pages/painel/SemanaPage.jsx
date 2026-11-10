// AG-03 — Semana (só a tela; dados de exemplo do Figma)
import { PainelLayout } from "@/presentation/components/painel/PainelLayout";
import { VisaoAgenda } from "@/presentation/components/agenda/VisaoAgenda";
import { SemanaDias } from "@/presentation/components/agenda/SemanaDias";
import { IconButton } from "@/presentation/components/ui/IconButton";
import setaEsquerda from "@/presentation/assets/icons/seta-esquerda-16.svg";
import setaDireita from "@/presentation/assets/icons/seta-direita-16.svg";

// Exemplo até existir back-end.
const DIAS = [
  { id: "seg", semana: "Seg", dia: 9, ocupados: 6, total: 18, hoje: true },
  { id: "ter", semana: "Ter", dia: 10, ocupados: 5, total: 18 },
  { id: "qua", semana: "Qua", dia: 11, ocupados: 4, total: 18 },
  { id: "qui", semana: "Qui", dia: 12, ocupados: 7, total: 18 },
  { id: "sex", semana: "Sex", dia: 13, ocupados: 9, total: 20 },
  { id: "sab", semana: "Sáb", dia: 14, ocupados: 15, total: 16, aviso: "Quase lotado" },
  { id: "dom", semana: "Dom", dia: 15, fechado: true },
];

export default function SemanaPage() {
  return (
    <PainelLayout aba="agenda" className="gap-4.5">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="text-[13px] font-medium text-ink-2">9 a 15 de novembro</p>
          <h1 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.96px] text-ink">
            Semana
          </h1>
        </div>
        {/* TODO(AG-03): trocar de semana. */}
        <div className="flex gap-2">
          <IconButton
            icon={setaEsquerda}
            iconSize={16}
            label="Semana anterior"
            className="size-9 before:-inset-1"
          />
          <IconButton
            icon={setaDireita}
            iconSize={16}
            label="Próxima semana"
            className="size-9 before:-inset-1"
          />
        </div>
      </header>

      <VisaoAgenda ativa="semana" />

      <p className="text-sm text-ink-2">34 atendimentos · R$ 1.940 previstos</p>

      <SemanaDias dias={DIAS} />
    </PainelLayout>
  );
}
