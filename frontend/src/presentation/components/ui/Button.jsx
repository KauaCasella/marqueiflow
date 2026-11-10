import { cn } from "@/presentation/utils/cn";
const variants = {
  primario: "bg-ink text-surface",
  secundario: "border border-line bg-surface text-ink",
  texto: "text-ink",
};
/** Botão base. Primário: uma ação por tela. */
export function Button({ variant = "primario", className, type = "button", ...props }) {
  return (
    <button
      type={type}
      className={cn(
        "inline-flex h-13 pressable items-center justify-center gap-2 rounded-[14px] px-6",
        "text-base font-semibold tracking-[-0.16px]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
