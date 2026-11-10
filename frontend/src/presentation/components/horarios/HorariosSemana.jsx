// ONB-03 / AJ-04 — Lista dos dias da semana + pausa para almoço (só a tela).
// Usado no cadastro (passo 3) e, depois, em Ajustes › Horários.
import { useState } from "react";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { Switch } from "@/presentation/components/ui/Switch";
import { TimeRangeField } from "@/presentation/components/ui/TimeRangeField";
import { cn } from "@/presentation/utils/cn";

// Valores de exemplo do Figma até existir back-end.
const semanaExemplo = [
  { id: "seg", nome: "Seg", aberto: true, inicio: "09:00", fim: "19:00" },
  { id: "ter", nome: "Ter", aberto: true, inicio: "09:00", fim: "19:00" },
  { id: "qua", nome: "Qua", aberto: true, inicio: "09:00", fim: "19:00" },
  { id: "qui", nome: "Qui", aberto: true, inicio: "09:00", fim: "19:00" },
  { id: "sex", nome: "Sex", aberto: true, inicio: "09:00", fim: "20:00" },
  { id: "sab", nome: "Sáb", aberto: true, inicio: "08:00", fim: "16:00" },
  { id: "dom", nome: "Dom", aberto: false, inicio: "09:00", fim: "13:00" },
];

export function HorariosSemana() {
  const [dias, setDias] = useState(semanaExemplo);
  const [pausa, setPausa] = useState({ ativa: true, inicio: "12:00", fim: "13:00" });

  const mudarDia = (id, mudanca) =>
    setDias((atual) => atual.map((d) => (d.id === id ? { ...d, ...mudanca } : d)));

  return (
    <>
      <ListGroup inset>
        {dias.map((dia) => (
          <div key={dia.id} className="flex items-center gap-3 py-2.5 pr-3.5 pl-4">
            <Switch
              size="sm"
              label={`Atende ${dia.nome}`}
              checked={dia.aberto}
              onChange={(aberto) => mudarDia(dia.id, { aberto })}
            />
            <p
              className={cn(
                "min-w-0 flex-1 text-[15px] font-semibold tracking-[-0.15px]",
                dia.aberto ? "text-ink" : "text-ink-2",
              )}
            >
              {dia.nome}
            </p>
            {dia.aberto ? (
              <TimeRangeField
                label={`Horário de ${dia.nome}`}
                start={dia.inicio}
                end={dia.fim}
                onChange={(faixa) => mudarDia(dia.id, faixa)}
              />
            ) : (
              <p className="text-sm text-ink-2">Fechado</p>
            )}
          </div>
        ))}
      </ListGroup>

      <ListGroup>
        <div className="flex items-center gap-3 py-3 pr-3.5 pl-4">
          <Switch
            size="sm"
            label="Pausa para almoço"
            checked={pausa.ativa}
            onChange={(ativa) => setPausa((p) => ({ ...p, ativa }))}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-px">
            <p className="text-[15px] font-semibold tracking-[-0.15px] whitespace-nowrap text-ink">
              Pausa para almoço
            </p>
            <p className="text-[13px] text-ink-2">Todos os dias</p>
          </div>
          {pausa.ativa && (
            <TimeRangeField
              label="Pausa para almoço"
              start={pausa.inicio}
              end={pausa.fim}
              onChange={(faixa) => setPausa((p) => ({ ...p, ...faixa }))}
            />
          )}
        </div>
      </ListGroup>
    </>
  );
}
