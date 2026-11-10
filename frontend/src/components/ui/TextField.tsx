import { useId, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/cn";

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> & {
  label: string;
  hint?: ReactNode;
  hintTone?: "neutro" | "sucesso" | "erro";
  /** Texto fixo antes do valor (ex.: "agendeaqui.com.br/"). */
  prefix?: string;
  /** Ícone ou elemento no fim da caixa. */
  suffix?: ReactNode;
};

const hintTones = {
  neutro: "font-normal text-ink-2",
  sucesso: "font-medium text-success",
  erro: "font-medium text-danger",
};

/** Campo de texto (Figma · Componentes base). Em foco a borda fica preta. */
export function TextField({
  label,
  hint,
  hintTone = "neutro",
  prefix,
  suffix,
  className,
  id,
  ...inputProps
}: TextFieldProps) {
  const autoId = useId();
  const inputId = id ?? autoId;
  const hintId = hint ? `${inputId}-dica` : undefined;

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      <label htmlFor={inputId} className="text-sm font-semibold text-ink">
        {label}
      </label>
      <div
        className={cn(
          "flex h-13 w-full items-center rounded-[14px] border border-line bg-surface px-4",
          "focus-within:border-ink focus-within:ring-[0.5px] focus-within:ring-ink",
          suffix && "pr-3.5",
        )}
      >
        {prefix && <span className="shrink-0 text-base text-ink-2">{prefix}</span>}
        <input
          id={inputId}
          aria-describedby={hintId}
          className={cn(
            "h-full min-w-0 flex-1 bg-transparent text-base text-ink outline-none placeholder:text-ink-3",
            prefix && "font-semibold",
          )}
          {...inputProps}
        />
        {suffix && <span className="ml-2 flex shrink-0 items-center">{suffix}</span>}
      </div>
      {hint && (
        <p id={hintId} className={cn("text-[13px]", hintTones[hintTone])}>
          {hint}
        </p>
      )}
    </div>
  );
}
