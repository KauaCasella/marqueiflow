// ONB-03 — Cadastro 3/4: horários (só a tela; sem regra por enquanto)
import { useNavigate } from "react-router";
import { HorariosSemana } from "@/presentation/components/horarios/HorariosSemana";
import { CadastroLayout } from "./CadastroLayout";

export function HorariosStep() {
  const navigate = useNavigate();

  return (
    <CadastroLayout
      passo={3}
      title="Quando você atende?"
      description="Só esses horários aparecem no seu link."
      onSubmit={() => navigate("/cadastro/4")}
      onBack={() => navigate("/cadastro/2")}
      backIcon="18"
      contentClassName="gap-4"
    >
      <HorariosSemana />
    </CadastroLayout>
  );
}
