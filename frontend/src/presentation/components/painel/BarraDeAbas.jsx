import { Link } from "react-router";
import { cn } from "@/presentation/utils/cn";
import agendaAtiva from "@/presentation/assets/icons/aba-agenda-ativa.svg";
import clientes from "@/presentation/assets/icons/aba-clientes.svg";
import resumo from "@/presentation/assets/icons/aba-resumo.svg";
import ajustes from "@/presentation/assets/icons/aba-ajustes.svg";

// Ícones do Figma (Barra de abas): Agenda já vem na cor ativa e as outras na inativa.
// TODO(painel): baixar a outra variante de cada ícone quando a tela daquela aba for feita.
const ABAS = [
  { id: "agenda", label: "Agenda", to: "/painel", icone: agendaAtiva },
  { id: "clientes", label: "Clientes", to: "/painel/clientes", icone: clientes },
  { id: "resumo", label: "Resumo", to: "/painel/resumo", icone: resumo },
  { id: "ajustes", label: "Ajustes", to: "/painel/ajustes", icone: ajustes },
];

/** Barra de abas do painel do profissional, fixa no rodapé. */
export function BarraDeAbas({ ativa }) {
  return (
    <nav
      aria-label="Painel"
      className="sticky bottom-0 flex h-20 w-full shrink-0 items-start border-t border-line bg-surface px-3 pt-2.5 pb-7.5"
    >
      {ABAS.map((aba) => {
        const isAtiva = aba.id === ativa;
        return (
          <Link
            key={aba.id}
            to={aba.to}
            aria-current={isAtiva ? "page" : undefined}
            className="relative flex flex-1 pressable flex-col items-center gap-1 before:absolute before:inset-x-0 before:-top-2.5 before:-bottom-2"
          >
            <img src={aba.icone} alt="" width={22} height={22} />
            <span
              className={cn(
                "text-[11px]",
                isAtiva ? "font-semibold text-ink" : "font-medium text-ink-2",
              )}
            >
              {aba.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
