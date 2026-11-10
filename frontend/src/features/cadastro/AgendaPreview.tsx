import { StatusBadge } from "@/components/ui/StatusBadge";
import { TimeSlot } from "@/components/ui/TimeSlot";

/** Ilustração da tela Entrar: um recorte da agenda funcionando. Não é interativa. */
export function AgendaPreview() {
  return (
    <div
      className="flex w-full flex-col gap-2.5 rounded-[20px] border border-line bg-surface p-4.5"
      aria-hidden="true"
    >
      <p className="text-[13px] font-medium text-ink-2">Hoje · 6 atendimentos</p>
      <div className="flex w-full gap-2">
        <TimeSlot time="16:30" className="w-auto flex-1" />
        <TimeSlot time="17:00" state="selecionado" className="w-auto flex-1" />
        <TimeSlot time="17:30" state="indisponivel" className="w-auto flex-1" />
        <TimeSlot time="18:00" className="w-auto flex-1" />
      </div>
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold tracking-[-0.14px] text-ink">Lucas marcou 17:00</p>
        <StatusBadge status="confirmado" />
      </div>
    </div>
  );
}
