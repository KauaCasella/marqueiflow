import { cn } from "@/presentation/utils/cn";
const states = {
  livre: "border border-line bg-surface text-ink",
  selecionado: "bg-accent text-ink",
  indisponivel: "bg-paper text-ink-3 line-through",
};
/**
 * Horário (Figma · Componentes base). O laranja marca o horário escolhido.
 * Sem `onSelect` vira só ilustração (não tocável).
 */
export function TimeSlot({ time, state = "livre", onSelect, className }) {
  const base = cn(
    "flex h-12 w-19 items-center justify-center rounded-[14px]",
    "text-base font-semibold tracking-[-0.16px] tabular-nums",
    states[state],
    className,
  );
  if (!onSelect) {
    return <span className={base}>{time}</span>;
  }
  return (
    <button
      type="button"
      className={cn("pressable", base)}
      onClick={onSelect}
      disabled={state === "indisponivel"}
      aria-pressed={state === "selecionado"}
    >
      {time}
    </button>
  );
}
