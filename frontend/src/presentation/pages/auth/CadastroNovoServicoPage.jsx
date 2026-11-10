// ONB-02 — Cadastro: adicionar serviço (mesmo formulário de AJ-03)
import { useNavigate } from "react-router";
import { ServicoForm } from "@/presentation/components/servicos/ServicoForm";

export default function CadastroNovoServicoPage() {
  const navigate = useNavigate();
  const voltar = () => navigate("/cadastro/2");

  return <ServicoForm onBack={voltar} onSave={voltar} />;
}
