// ONB-04 — Cadastro 4/4: Pix e sinal (só a tela; sem regra por enquanto)
import { useState } from "react";
import { useNavigate } from "react-router";
import { ChoiceChips } from "@/presentation/components/ui/ChoiceChips";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { ListRow } from "@/presentation/components/ui/ListRow";
import { Switch } from "@/presentation/components/ui/Switch";
import { TextField } from "@/presentation/components/ui/TextField";
import { CadastroLayout } from "./CadastroLayout";

const tiposDeChave = [
  { value: "celular", label: "Celular", placeholder: "(19) 9 8123-4567", inputMode: "tel" },
  { value: "email", label: "E-mail", placeholder: "rafabarber@email.com", inputMode: "email" },
  { value: "documento", label: "CPF/CNPJ", placeholder: "000.000.000-00", inputMode: "numeric" },
  { value: "aleatoria", label: "Aleatória", placeholder: "Cole a chave aqui", inputMode: "text" },
];

const sinais = [
  { value: 20, label: "20%" },
  { value: 30, label: "30%" },
  { value: 50, label: "50%" },
];

export function PixStep() {
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("email");
  const [chave, setChave] = useState("");
  const [nome, setNome] = useState("");
  const [cobrarSinal, setCobrarSinal] = useState(true);
  const [sinal, setSinal] = useState(30);

  const tipoAtual = tiposDeChave.find((t) => t.value === tipo);

  return (
    <CadastroLayout
      passo={4}
      title="Como você recebe o sinal?"
      description="O cliente paga direto para você. A gente não toca no dinheiro."
      submitLabel="Concluir cadastro"
      onSubmit={() => navigate("/cadastro/pronto")}
      onBack={() => navigate("/cadastro/3")}
      backIcon="18"
    >
      <section className="flex flex-col gap-2">
        <h2 className="text-sm font-semibold text-ink">Tipo de chave Pix</h2>
        <ChoiceChips
          label="Tipo de chave Pix"
          options={tiposDeChave}
          value={tipo}
          onChange={setTipo}
        />
      </section>

      <TextField
        label="Chave Pix"
        placeholder={tipoAtual.placeholder}
        inputMode={tipoAtual.inputMode}
        autoCapitalize="none"
        value={chave}
        onChange={(e) => setChave(e.target.value)}
      />
      <TextField
        label="Nome de quem recebe"
        placeholder="Rafael Barbosa"
        autoComplete="name"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        hint="O cliente confere esse nome no app do banco."
      />

      <ListGroup inset>
        <ListRow
          size="md"
          title="Cobrar sinal"
          description="Sem pagar em 30 min, o horário volta a ficar livre."
          trailing={
            <Switch
              size="sm"
              label="Cobrar sinal"
              checked={cobrarSinal}
              onChange={setCobrarSinal}
            />
          }
        />
        {cobrarSinal && (
          <div className="px-4 pt-3 pb-3.5">
            <ChoiceChips
              label="Quanto do valor"
              options={sinais}
              value={sinal}
              onChange={setSinal}
            />
          </div>
        )}
      </ListGroup>
    </CadastroLayout>
  );
}
