import { cn } from "@/presentation/utils/cn";

/**
 * Opções de escolha única em pílulas (ex.: duração, % do sinal).
 * options: [{ value, label }]. Selecionada = fundo preto.
 */
export function ChoiceChips({ label, options, value, onChange, className }) {
  return (
    <div role="radiogroup" aria-label={label} className={cn("flex flex-wrap gap-2", className)}>
      {options.map((opcao) => {
        const selecionada = opcao.value === value;
        return (
          <button
            key={String(opcao.value)}
            type="button"
            role="radio"
            aria-checked={selecionada}
            onClick={() => onChange(opcao.value)}
            className={cn(
              "relative flex h-10 pressable items-center justify-center rounded-xl px-3",
              "text-sm font-semibold tracking-[-0.14px]",
              "before:absolute before:inset-x-0 before:-inset-y-0.5",
              selecionada ? "bg-ink text-surface" : "border border-line bg-surface text-ink",
            )}
          >
            {opcao.label}
          </button>
        );
      })}
    </div>
  );
}
