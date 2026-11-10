// AJ-06 — Modal P4 · Bloquear horário (só a tela; valores de exemplo do Figma)
import { useState } from "react";
import { BottomSheet } from "@/presentation/components/ui/BottomSheet";
import { Button } from "@/presentation/components/ui/Button";
import { ChoiceChips } from "@/presentation/components/ui/ChoiceChips";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { TextField } from "@/presentation/components/ui/TextField";
import calendarioIcon from "@/presentation/assets/icons/calendario-18.svg";
import relogioIcon from "@/presentation/assets/icons/relogio-18.svg";
import setaIcon from "@/presentation/assets/icons/seta-direita-16-clara.svg";

const tipos = [
  { value: "periodo", label: "Período" },
  { value: "dia", label: "Dia inteiro" },
  { value: "varios", label: "Vários dias" },
];

// Exemplo até existir back-end.
const QUANDO = [
  { id: "dia", icone: calendarioIcon, label: "Dia", valor: "Ter, 24 de novembro" },
  { id: "das", icone: relogioIcon, label: "Das", valor: "13:00" },
  { id: "ate", icone: relogioIcon, label: "Até", valor: "15:00" },
];

export function BloquearHorarioSheet({ open, onClose }) {
  const [tipo, setTipo] = useState("periodo");
  const [motivo, setMotivo] = useState("");

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      title="Bloquear horário"
      description="Os horários somem do seu link. Quem já marcou não é afetado."
    >
      <ChoiceChips label="Tipo de bloqueio" options={tipos} value={tipo} onChange={setTipo} />

      {/* TODO(AJ-06): escolher dia e horas. */}
      <ListGroup inset className="leading-[normal]">
        {QUANDO.map((q) => (
          <button
            key={q.id}
            type="button"
            className="flex pressable items-center gap-2.5 py-[13px] pr-3.5 pl-4 text-left active:scale-100 active:bg-paper"
          >
            <img src={q.icone} alt="" width={18} height={18} className="shrink-0" />
            <span className="min-w-0 flex-1 text-sm text-ink-2">{q.label}</span>
            <span className="text-sm font-semibold tracking-[-0.14px] text-ink">{q.valor}</span>
            <img src={setaIcon} alt="" width={16} height={16} className="shrink-0" />
          </button>
        ))}
      </ListGroup>

      <TextField
        label="Motivo (só você vê)"
        placeholder="Ex.: médico"
        value={motivo}
        onChange={(e) => setMotivo(e.target.value)}
      />

      <Button className="w-full" onClick={onClose}>
        Bloquear horário
      </Button>
    </BottomSheet>
  );
}
