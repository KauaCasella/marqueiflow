import { useEffect, useId } from "react";
import { IconButton } from "@/presentation/components/ui/IconButton";
import { cn } from "@/presentation/utils/cn";
import fecharIcon from "@/presentation/assets/icons/fechar-16.svg";

/**
 * Folha que sobe de baixo (Figma · Modais): fundo escurecido, alça, título, texto e botão de fechar.
 * Fecha ao tocar no fundo, no X ou com Esc. className: ajustes da folha (ex.: outro espaçamento).
 * semFechar: esconde o X (ex.: C3, em que a pessoa precisa escolher uma das opções).
 */
export function BottomSheet({
  open,
  onClose,
  title,
  description,
  className,
  semFechar = false,
  children,
}) {
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      <div className="absolute inset-0 bg-ink/45" onClick={onClose} aria-hidden="true" />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={cn(
          "relative flex max-h-[92dvh] w-full max-w-[430px] flex-col gap-4.5 overflow-y-auto rounded-t-3xl bg-surface px-5 pt-2.5 pb-8.5",
          className,
        )}
      >
        <div className="flex justify-center" aria-hidden="true">
          <div className="h-1 w-9 rounded-sm bg-line" />
        </div>
        <div className="flex items-start gap-3">
          <div className="flex min-w-0 flex-1 flex-col gap-1.5">
            <h2
              id={titleId}
              className="text-[22px] leading-[1.2] font-semibold tracking-[-0.44px] text-ink"
            >
              {title}
            </h2>
            {description && <p className="text-[15px] leading-[1.45] text-ink-2">{description}</p>}
          </div>
          {!semFechar && (
            <IconButton
              icon={fecharIcon}
              iconSize={16}
              label="Fechar"
              onClick={onClose}
              className="size-9 border-0 bg-paper before:-inset-1"
            />
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
