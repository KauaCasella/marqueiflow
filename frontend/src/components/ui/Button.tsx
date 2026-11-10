import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type ButtonVariant = "primario" | "secundario" | "texto";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
};

const variants: Record<ButtonVariant, string> = {
  primario: "bg-ink text-surface",
  secundario: "border border-line bg-surface text-ink",
  texto: "text-ink",
};

/** Botão base. Primário: uma ação por tela. */
export function Button({
  variant = "primario",
  className,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "pressable inline-flex h-13 items-center justify-center gap-2 rounded-[14px] px-6",
        "text-base font-semibold tracking-[-0.16px]",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
