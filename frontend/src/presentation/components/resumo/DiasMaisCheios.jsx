import { cn } from "@/presentation/utils/cn";

/**
 * Gráfico de barras dos dias da semana.
 * dias: { id, label, altura (px, até 84), destaque?, valor? }.
 * destaque: barra laranja, rótulo em negrito e o valor em cima.
 */
export function DiasMaisCheios({ dias }) {
  return (
    <div className="flex h-35 items-end gap-2.5 leading-[normal]">
      {dias.map((d) => (
        <div
          key={d.id}
          className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-1.5"
        >
          {d.destaque && (
            <span className="text-xs font-semibold text-ink tabular-nums">{d.valor}</span>
          )}
          <span
            className={cn(
              "w-full rounded-t-md rounded-b-[2px]",
              d.destaque ? "bg-accent" : "bg-line",
            )}
            style={{ height: d.altura }}
          />
          <span
            className={cn(
              "text-xs",
              d.destaque ? "font-semibold text-ink" : "font-medium text-ink-2",
            )}
          >
            {d.label}
          </span>
        </div>
      ))}
    </div>
  );
}
