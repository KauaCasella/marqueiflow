import { cn } from "@/presentation/utils/cn";

/**
 * Botão redondo de 40 px com ícone (ex.: voltar).
 * A área de toque é ampliada para 44 px sem mudar o desenho.
 */
export function IconButton({ icon, iconSize = 20, label, className, type = "button", ...props }) {
  return (
    <button
      type={type}
      aria-label={label}
      className={cn(
        "relative flex size-10 shrink-0 pressable items-center justify-center rounded-full border border-line bg-surface",
        "before:absolute before:-inset-0.5",
        className,
      )}
      {...props}
    >
      <img src={icon} alt="" width={iconSize} height={iconSize} />
    </button>
  );
}
