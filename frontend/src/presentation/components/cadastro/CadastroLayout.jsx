import { Button } from "@/presentation/components/ui/Button";
import { StepProgress } from "@/presentation/components/ui/StepProgress";
export const TOTAL_PASSOS = 4;
/** Moldura dos passos do cadastro (ONB-01..05): topo, progresso, conteúdo e botão fixo embaixo. */
export function CadastroLayout({
  passo,
  title,
  children,
  submitLabel = "Continuar",
  canSubmit = true,
  onSubmit,
  back,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (canSubmit) onSubmit();
  };
  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-paper pt-3"
    >
      <header className="flex h-13 items-center justify-between px-5">
        <div className="flex min-w-25 items-center">{back}</div>
        <p className="text-[13px] font-medium text-ink-2">
          Passo {passo} de {TOTAL_PASSOS}
        </p>
      </header>
      <StepProgress current={passo} total={TOTAL_PASSOS} className="px-5 py-1" />

      <main className="flex flex-1 flex-col gap-4.5 px-5 py-4">
        <h1 className="text-[28px] leading-[1.12] font-semibold tracking-[-0.84px] text-ink">
          {title}
        </h1>
        {children}
      </main>

      <footer className="sticky bottom-0 bg-paper px-5 pt-3 pb-8.5">
        <Button type="submit" className="w-full" disabled={!canSubmit}>
          {submitLabel}
        </Button>
      </footer>
    </form>
  );
}
