// ONB-02 — Cadastro 2/4: serviços
import { useNavigate } from "react-router";
import { useCadastro } from "@/application/cadastro/CadastroContext";
import { formatarMoeda } from "@/domain/formatacao";
import { resumoServico } from "@/domain/servico";
import { DashedButton } from "@/presentation/components/ui/DashedButton";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { ListRow } from "@/presentation/components/ui/ListRow";
import maisIcon from "@/presentation/assets/icons/mais.svg";
import { CadastroLayout } from "./CadastroLayout";

export function ServicosStep() {
  const navigate = useNavigate();
  const { servicos } = useCadastro();

  return (
    <CadastroLayout
      passo={2}
      title="Quais serviços você oferece?"
      description="Comece pelos mais pedidos. Dá para editar quando quiser."
      submitLabel="Continuar para horários"
      canSubmit={servicos.length > 0}
      onSubmit={() => navigate("/cadastro/3")}
      onBack={() => navigate("/cadastro/1")}
      contentClassName="gap-5 pt-5"
    >
      {servicos.length > 0 && (
        <ListGroup>
          {servicos.map((servico) => (
            <ListRow
              key={servico.id}
              title={servico.nome}
              description={resumoServico(servico)}
              trailing={formatarMoeda(servico.preco)}
            />
          ))}
        </ListGroup>
      )}
      <DashedButton icon={maisIcon} onClick={() => navigate("/cadastro/servicos/novo")}>
        Adicionar serviço
      </DashedButton>
      <p className="text-[13px] leading-[1.45] text-ink-2">
        Combos, como corte + barba, entram como um serviço só. Assim a agenda calcula o tempo certo.
      </p>
    </CadastroLayout>
  );
}
