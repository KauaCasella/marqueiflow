import { cn } from "@/presentation/utils/cn";
import ligado from "@/presentation/assets/icons/interruptor-ligado.svg";
import desligado from "@/presentation/assets/icons/interruptor-desligado.svg";

/** Interruptor liga/desliga (48 × 28). Área de toque de 44 px de altura. */
export function Switch({ checked, onChange, label, className }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      aria-label={label}
      onClick={() => onChange(!checked)}
      className={cn(
        "relative h-7 w-12 shrink-0 pressable",
        "before:absolute before:inset-x-0 before:-inset-y-2",
        className,
      )}
    >
      <img src={checked ? ligado : desligado} alt="" width={48} height={28} />
    </button>
  );
}
