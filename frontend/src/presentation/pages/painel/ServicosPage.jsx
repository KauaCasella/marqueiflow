// AJ-02 — Ajustes › Serviços (só a tela; dados de exemplo do Figma)
import { Link, useNavigate } from "react-router";
import { DashedButton } from "@/presentation/components/ui/DashedButton";
import { IconButton } from "@/presentation/components/ui/IconButton";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { cn } from "@/presentation/utils/cn";
import voltarIcon from "@/presentation/assets/icons/voltar-18.svg";
import maisIcon from "@/presentation/assets/icons/mais.svg";
import arrastarIcon from "@/presentation/assets/icons/arrastar-20.svg";
import ocultoIcon from "@/presentation/assets/icons/oculto-18.svg";
import setaIcon from "@/presentation/assets/icons/seta-direita-16-clara.svg";

// Exemplo até existir back-end.
const SERVICOS = [
  { id: "1", nome: "Corte", detalhe: "30 min · R$ 40" },
  { id: "2", nome: "Corte + barba", detalhe: "50 min · R$ 60 · sinal 30%" },
  { id: "3", nome: "Barba", detalhe: "20 min · R$ 25" },
  { id: "4", nome: "Sobrancelha na navalha", detalhe: "20 min · R$ 25 · sinal 30%" },
  { id: "5", nome: "Pigmentação", detalhe: "40 min · R$ 50 · oculto", oculto: true },
];

export default function ServicosPage() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-paper pt-3">
      <header className="flex h-13 items-center gap-3 px-5">
        <IconButton
          icon={voltarIcon}
          iconSize={18}
          label="Voltar"
          onClick={() => navigate("/painel/ajustes")}
        />
        <h1 className="flex-1 text-[17px] font-semibold tracking-[-0.17px] text-ink">Serviços</h1>
      </header>

      <main className="flex flex-1 flex-col gap-4 px-5 pt-3 pb-4">
        <p className="text-sm leading-[1.45] text-ink-2">
          Arraste para mudar a ordem na sua página. Toque para editar.
        </p>

        {/* TODO(AJ-02): arrastar para reordenar. */}
        <ListGroup dividerClassName="pl-[42px]" className="leading-[normal]">
          {SERVICOS.map((s) => (
            <Link
              key={s.id}
              to={`/painel/ajustes/servicos/${s.id}`}
              className="flex pressable items-center gap-3 py-[13px] pr-3.5 pl-2.5 active:scale-100 active:bg-paper"
            >
              <img src={arrastarIcon} alt="" width={20} height={20} className="shrink-0" />
              <span
                className={cn(
                  "flex min-w-0 flex-1 flex-col gap-0.5",
                  s.oculto ? "text-ink-2" : "text-ink",
                )}
              >
                <span className="truncate text-[15px] font-semibold tracking-[-0.15px]">
                  {s.nome}
                </span>
                <span className="truncate text-[13px] text-ink-2">{s.detalhe}</span>
              </span>
              {s.oculto && (
                <img
                  src={ocultoIcon}
                  alt="Oculto na sua página"
                  width={18}
                  height={18}
                  className="shrink-0"
                />
              )}
              <img src={setaIcon} alt="" width={16} height={16} className="shrink-0" />
            </Link>
          ))}
        </ListGroup>

        <DashedButton icon={maisIcon} onClick={() => navigate("/painel/ajustes/servicos/novo")}>
          Adicionar serviço
        </DashedButton>
      </main>
    </div>
  );
}
