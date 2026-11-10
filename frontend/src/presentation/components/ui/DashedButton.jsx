import { cn } from "@/presentation/utils/cn";

/** Botão tracejado de "adicionar" (ex.: Adicionar serviço). */
export function DashedButton({ icon, children, className, type = "button", ...props }) {
  return (
    <button
      type={type}
      className={cn(
        "flex h-14 w-full pressable items-center gap-2.5 rounded-2xl border-[1.5px] border-dashed border-ink-3 px-4.5",
        "text-[15px] font-semibold tracking-[-0.15px] text-ink",
        className,
      )}
      {...props}
    >
      {icon && <img src={icon} alt="" width={18} height={18} />}
      {children}
    </button>
  );
}
