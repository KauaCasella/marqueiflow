// CLI-02 — Seu agendamento (só a tela; dados de exemplo do Figma)
import { Link, useNavigate, useParams } from "react-router";
import { Button } from "@/presentation/components/ui/Button";
import { IconButton } from "@/presentation/components/ui/IconButton";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { StatusBadge } from "@/presentation/components/ui/StatusBadge";
import voltarIcon from "@/presentation/assets/icons/voltar-18.svg";
import whatsappIcon from "@/presentation/assets/icons/whatsapp-18.svg";
import mapaIcon from "@/presentation/assets/icons/mapa-18.svg";
import calendarioIcon from "@/presentation/assets/icons/calendario-18-escuro.svg";
import trocarIcon from "@/presentation/assets/icons/trocar-18.svg";
import pessoaIcon from "@/presentation/assets/icons/pessoa-18.svg";
import calendarioMaisIcon from "@/presentation/assets/icons/calendario-mais-18.svg";
import setaIcon from "@/presentation/assets/icons/seta-direita-16-clara.svg";

const linha =
  "flex pressable items-center gap-3 px-3.5 py-[13px] text-left active:scale-100 active:bg-paper";

export default function SeuAgendamentoPage() {
  const { token } = useParams();
  const navigate = useNavigate();

  // Exemplo até existir back-end. TODO(CLI-02): telas de trocar serviço e meus dados.
  const ALTERACOES = [
    {
      id: "remarcar",
      icone: calendarioIcon,
      titulo: "Remarcar",
      detalhe: "Outro dia ou horário",
      to: `/a/${token}/remarcar`,
    },
    { id: "servico", icone: trocarIcon, titulo: "Trocar serviço", detalhe: "Corte + barba" },
    {
      id: "dados",
      icone: pessoaIcon,
      titulo: "Meus dados",
      detalhe: "Lucas Andrade · (19) 9 8765-4321",
    },
    { id: "agenda", icone: calendarioMaisIcon, titulo: "Pôr na agenda do celular" },
  ];

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-paper pt-3">
      <header className="flex h-13 items-center gap-3 px-5">
        <IconButton
          icon={voltarIcon}
          iconSize={18}
          label="Voltar"
          onClick={() => navigate("/meus-horarios")}
        />
        <h1 className="flex-1 text-[17px] font-semibold tracking-[-0.17px] text-ink">
          Seu agendamento
        </h1>
      </header>

      <main className="flex flex-1 flex-col gap-4.5 px-5 pt-3 pb-4 leading-[normal]">
        <section className="flex flex-col items-start gap-1.5">
          <StatusBadge status="confirmado" />
          <p className="text-[15px] font-medium text-ink-2">Segunda, 9 de novembro</p>
          <p className="text-4xl leading-[1.05] font-semibold tracking-[-1.08px] text-ink tabular-nums">
            17:00 – 17:50
          </p>
          <p className="text-sm text-ink-2">Corte + barba · R$ 60 · sinal de R$ 18 pago</p>
        </section>

        <section className="flex items-center gap-3 rounded-2xl border border-line bg-surface py-3 pr-3 pl-3.5">
          <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink text-[15px] font-semibold tracking-[-0.3px] text-surface">
            RB
          </span>
          <div className="flex min-w-0 flex-1 flex-col gap-0.5">
            <p className="truncate text-[15px] font-semibold tracking-[-0.15px] text-ink">
              Rafa Barber
            </p>
            <p className="truncate text-[13px] text-ink-2">R. Barão de Jaguara, 1200</p>
          </div>
          {/* TODO(CLI-02): WhatsApp e mapa do profissional. */}
          <IconButton
            icon={whatsappIcon}
            iconSize={18}
            label="Falar no WhatsApp"
            className="border-0 bg-paper"
          />
          <IconButton
            icon={mapaIcon}
            iconSize={18}
            label="Abrir no mapa"
            className="border-0 bg-paper"
          />
        </section>

        <h2 className="text-[17px] font-semibold tracking-[-0.17px] text-ink">
          Precisa mudar algo?
        </h2>
        <ListGroup dividerClassName="pl-[62px]">
          {ALTERACOES.map((a) => {
            const conteudo = (
              <>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-[10px] bg-paper">
                  <img src={a.icone} alt="" width={18} height={18} />
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-px">
                  <span className="truncate text-[15px] font-semibold tracking-[-0.15px] text-ink">
                    {a.titulo}
                  </span>
                  {a.detalhe && (
                    <span className="truncate text-[13px] text-ink-2">{a.detalhe}</span>
                  )}
                </span>
                <img src={setaIcon} alt="" width={16} height={16} className="shrink-0" />
              </>
            );
            return a.to ? (
              <Link key={a.id} to={a.to} className={linha}>
                {conteudo}
              </Link>
            ) : (
              <button key={a.id} type="button" className={linha}>
                {conteudo}
              </button>
            );
          })}
        </ListGroup>

        <p className="text-[13px] leading-[1.4] text-ink-2">
          Você pode alterar ou cancelar até seg, 15:00 (2h antes).
        </p>
      </main>

      <footer className="flex flex-col px-5 pt-3 pb-8.5">
        {/* TODO(CLI-02): confirmar no modal C1 antes de cancelar. */}
        <Button
          variant="texto"
          className="w-full text-danger"
          onClick={() => navigate(`/a/${token}/cancelado`)}
        >
          Cancelar agendamento
        </Button>
      </footer>
    </div>
  );
}
