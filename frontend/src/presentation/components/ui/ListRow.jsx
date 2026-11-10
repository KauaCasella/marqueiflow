import { cn } from "@/presentation/utils/cn";

const sizes = {
  // Cartão de serviço: título 17, valor à direita em 17.
  lg: {
    row: "gap-4 px-5 py-4",
    title: "text-[17px] tracking-[-0.17px]",
    gap: "gap-1",
    desc: "leading-normal",
  },
  // Linha de ajuste: título 15, com interruptor ou opções.
  md: {
    row: "gap-3 px-4 py-3.5",
    title: "text-[15px] tracking-[-0.15px]",
    gap: "gap-0.5",
    desc: "leading-[1.4]",
  },
};

/**
 * Linha de lista: título, descrição embaixo e algo à direita (preço, interruptor...).
 * trailing: string vira texto em destaque; elemento é renderizado como veio.
 * children: conteúdo extra embaixo da linha (ex.: opções que aparecem quando liga).
 */
export function ListRow({
  title,
  description,
  trailing,
  size = "lg",
  className,
  rowClassName,
  children,
}) {
  const s = sizes[size];

  return (
    <div className={cn("flex w-full flex-col", className)}>
      <div className={cn("flex w-full items-center justify-between", s.row, rowClassName)}>
        <div className={cn("flex min-w-0 flex-1 flex-col", s.gap)}>
          <p className={cn("font-semibold text-ink", s.title)}>{title}</p>
          {description && <p className={cn("text-[13px] text-ink-2", s.desc)}>{description}</p>}
        </div>
        {typeof trailing === "string" ? (
          <p className={cn("shrink-0 font-semibold text-ink tabular-nums", s.title)}>{trailing}</p>
        ) : (
          trailing
        )}
      </div>
      {children}
    </div>
  );
}
