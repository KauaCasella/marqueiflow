// ONB-02 — Cadastro 2/4: serviços (só a tela; lista de exemplo do Figma)
import { useNavigate } from "react-router";
import { DashedButton } from "@/presentation/components/ui/DashedButton";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { ListRow } from "@/presentation/components/ui/ListRow";
import maisIcon from "@/presentation/assets/icons/mais.svg";
import { CadastroLayout } from "./CadastroLayout";

// Dados de exemplo até existir back-end.
const servicosExemplo = [
  { id: "1", nome: "Corte", detalhe: "30 min", preco: "R$ 40" },
  { id: "2", nome: "Corte + barba", detalhe: "50 min · sinal de R$ 18", preco: "R$ 60" },
  { id: "3", nome: "Barba", detalhe: "20 min", preco: "R$ 25" },
];

export function ServicosStep() {
  const navigate = useNavigate();

  return (
    <CadastroLayout
      passo={2}
      title="Quais serviços você oferece?"
      description="Comece pelos mais pedidos. Dá para editar quando quiser."
      submitLabel="Continuar para horários"
      onSubmit={() => navigate("/cadastro/3")}
      onBack={() => navigate("/cadastro/1")}
      contentClassName="gap-5 pt-5"
    >
      <ListGroup>
        {servicosExemplo.map((s) => (
          <ListRow key={s.id} title={s.nome} description={s.detalhe} trailing={s.preco} />
        ))}
      </ListGroup>
      <DashedButton icon={maisIcon} onClick={() => navigate("/cadastro/servicos/novo")}>
        Adicionar serviço
      </DashedButton>
      <p className="text-[13px] leading-[1.45] text-ink-2">
        Combos, como corte + barba, entram como um serviço só. Assim a agenda calcula o tempo certo.
      </p>
    </CadastroLayout>
  );
}
