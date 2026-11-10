// ONB-03 — Cadastro 3/4: horários
import { useNavigate } from "react-router";
import { useCadastro } from "@/application/cadastro/CadastroContext";
import { useHorariosForm } from "@/application/horarios/useHorariosForm";
import { HorariosSemana } from "@/presentation/components/horarios/HorariosSemana";
import { CadastroLayout } from "./CadastroLayout";

export function HorariosStep() {
  const navigate = useNavigate();
  const cadastro = useCadastro();
  const form = useHorariosForm(cadastro.horarios);

  return (
    <CadastroLayout
      passo={3}
      title="Quando você atende?"
      description="Só esses horários aparecem no seu link."
      canSubmit={form.podeSalvar}
      onSubmit={() => {
        cadastro.salvarHorarios(form.horarios);
        navigate("/cadastro/4");
      }}
      onBack={() => {
        cadastro.salvarHorarios(form.horarios);
        navigate("/cadastro/2");
      }}
      backIcon="18"
      contentClassName="gap-4"
    >
      <HorariosSemana form={form} />
    </CadastroLayout>
  );
}
