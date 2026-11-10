// AG-01 — Agenda de hoje (por enquanto só o estado vazio do primeiro dia; dados de exemplo do Figma)
import { PainelLayout } from "@/presentation/components/painel/PainelLayout";
import { AgendaVazia } from "@/presentation/components/agenda/AgendaVazia";
import { IconButton } from "@/presentation/components/ui/IconButton";
import maisIcon from "@/presentation/assets/icons/mais-20.svg";

export default function AgendaHojePage() {
  return (
    <PainelLayout aba="agenda">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="text-[13px] font-medium text-ink-2">Segunda, 9 de novembro</p>
          <h1 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.96px] text-ink">
            Hoje
          </h1>
        </div>
        {/* TODO(AG-01): abrir o modal P2 Novo agendamento. */}
        <IconButton
          icon={maisIcon}
          label="Novo agendamento"
          className="size-11 border-0 bg-ink before:hidden"
        />
      </header>

      <AgendaVazia />
    </PainelLayout>
  );
}
