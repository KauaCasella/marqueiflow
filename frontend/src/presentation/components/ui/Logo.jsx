import { cn } from "@/presentation/utils/cn";
/** Wordmark "agendeaqui." — o ponto laranja é o "aqui". Não alterar proporções. */
export function Logo({ className }) {
  return (
    <p
      className={cn("text-[26px] leading-none font-bold tracking-[-1.3px] text-ink", className)}
      aria-label="AgendeAqui"
    >
      agendeaqui<span className="text-accent">.</span>
    </p>
  );
}
