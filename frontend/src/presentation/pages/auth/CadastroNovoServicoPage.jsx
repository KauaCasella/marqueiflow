// ONB-02 — Cadastro: adicionar serviço (mesmo formulário de AJ-03)
import { useNavigate } from "react-router";
import { useCadastro } from "@/application/cadastro/CadastroContext";
import { ServicoForm } from "@/presentation/components/servicos/ServicoForm";

export default function CadastroNovoServicoPage() {
  const navigate = useNavigate();
  const { adicionarServico } = useCadastro();
  const voltar = () => navigate("/cadastro/2");

  return (
    <ServicoForm
      onBack={voltar}
      onSave={(servico) => {
        adicionarServico(servico);
        voltar();
      }}
    />
  );
}
