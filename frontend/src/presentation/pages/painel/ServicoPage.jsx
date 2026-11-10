// AJ-03 — Ajustes › Serviço: novo (/novo) ou editar (/:id). Só a tela; dados de exemplo do Figma.
import { useNavigate, useParams } from "react-router";
import { ServicoForm } from "@/presentation/components/servicos/ServicoForm";

// Exemplo até existir back-end: todo serviço abre como no Figma (15b).
const EXEMPLO = { nome: "Sobrancelha na navalha", preco: "25" };

export default function ServicoPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const voltar = () => navigate("/painel/ajustes/servicos");

  if (id === "novo") {
    return <ServicoForm onBack={voltar} onSave={voltar} />;
  }

  // TODO(AJ-03): confirmar antes de excluir.
  return (
    <ServicoForm
      key={id}
      titulo="Editar serviço"
      submitLabel="Salvar alterações"
      inicial={EXEMPLO}
      onBack={voltar}
      onSave={voltar}
      onExcluir={voltar}
    />
  );
}
