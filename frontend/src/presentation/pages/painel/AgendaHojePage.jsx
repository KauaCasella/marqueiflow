// AG-01 — Agenda de hoje (só a tela; dados de exemplo do Figma)
// /painel mostra o dia com atendimentos; /painel?estado=vazia, o primeiro dia sem nenhum.
import { Link, useSearchParams } from "react-router";
import { PainelLayout } from "@/presentation/components/painel/PainelLayout";
import { AgendaVazia } from "@/presentation/components/agenda/AgendaVazia";
import { ProximoAtendimento } from "@/presentation/components/agenda/ProximoAtendimento";
import { AgendaDoDia } from "@/presentation/components/agenda/AgendaDoDia";
import { IconButton } from "@/presentation/components/ui/IconButton";
import maisIcon from "@/presentation/assets/icons/mais-20.svg";

// Exemplo até existir back-end.
const MAIS_TARDE = [
  { hora: "17:00", cliente: "Marcos Lima", servico: "Corte · 30 min", status: "aguardando-sinal" },
  { hora: "17:30", livre: true },
  { hora: "18:00", cliente: "Pedro Alves", servico: "Barba · 20 min", status: "confirmado" },
  { hora: "18:30", cliente: "João Souza", servico: "Corte + barba · 50 min", status: "confirmado" },
];

export default function AgendaHojePage() {
  const [params] = useSearchParams();
  const vazia = params.get("estado") === "vazia";

  return (
    <PainelLayout aba="agenda">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-0.5">
          <p className="text-[13px] font-medium text-ink-2">Segunda, 9 de novembro</p>
          <h1 className="text-[32px] leading-[1.1] font-semibold tracking-[-0.96px] text-ink">
            Hoje
          </h1>
        </div>
        {/* TODO(AG-01): abrir o modal P2 Novo agendamento. */}
        <IconButton
          icon={maisIcon}
          label="Novo agendamento"
          className="size-11 border-0 bg-ink before:hidden"
        />
      </header>

      {vazia ? (
        <AgendaVazia />
      ) : (
        <>
          <p className="text-sm text-ink-2">6 atendimentos · R$ 340 previstos · 1 sinal pendente</p>

          {/* TODO(AG-01): Lembrete abre o modal P3 e Ver detalhes, o P1. */}
          <ProximoAtendimento
            quando="em 25 min"
            hora="16:30"
            cliente="Lucas Andrade"
            detalhe="Corte + barba · sinal pago"
          />

          <section className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <h2 className="text-[17px] font-semibold tracking-[-0.17px] text-ink">Mais tarde</h2>
              <Link
                to="/painel/semana"
                className="-my-3 flex h-11 pressable items-center text-sm font-semibold text-accent-strong"
              >
                Ver semana
              </Link>
            </div>
            {/* TODO(AG-01): tocar no atendimento abre o P1; Marcar abre o P2. */}
            <AgendaDoDia itens={MAIS_TARDE} />
          </section>
        </>
      )}
    </PainelLayout>
  );
}
