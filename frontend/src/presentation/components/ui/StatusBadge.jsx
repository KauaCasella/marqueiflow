import { cn } from "@/presentation/utils/cn";
import dotConfirmado from "@/presentation/assets/icons/status-confirmado.svg";
import dotAguardando from "@/presentation/assets/icons/status-aguardando.svg";
import dotFaltou from "@/presentation/assets/icons/status-faltou.svg";
const config = {
  confirmado: {
    label: "Confirmado",
    dot: dotConfirmado,
    className: "bg-success-soft text-success",
  },
  "aguardando-sinal": {
    label: "Aguardando sinal",
    dot: dotAguardando,
    className: "bg-accent-soft text-accent-strong",
  },
  faltou: { label: "Faltou", dot: dotFaltou, className: "bg-paper text-danger" },
};
export function StatusBadge({ status, className }) {
  const { label, dot, className: tone } = config[status];
  return (
    <span
      className={cn(
        "inline-flex h-7 shrink-0 items-center gap-1.5 rounded-[14px] pr-3 pl-2.5",
        "text-[13px] font-semibold whitespace-nowrap",
        tone,
        className,
      )}
    >
      <img src={dot} alt="" width={6} height={6} />
      {label}
    </span>
  );
}
