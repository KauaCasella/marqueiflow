import { cn } from "@/lib/cn";

type StepProgressProps = {
  current: number;
  total: number;
  className?: string;
};

/** Barrinhas de progresso de um fluxo em passos. */
export function StepProgress({ current, total, className }: StepProgressProps) {
  return (
    <div
      className={cn("flex w-full gap-1.5", className)}
      role="progressbar"
      aria-valuemin={1}
      aria-valuemax={total}
      aria-valuenow={current}
      aria-label={`Passo ${current} de ${total}`}
    >
      {Array.from({ length: total }, (_, i) => (
        <span
          key={i}
          className={cn("h-[3px] flex-1 rounded-[2px]", i < current ? "bg-ink" : "bg-line")}
        />
      ))}
    </div>
  );
}
