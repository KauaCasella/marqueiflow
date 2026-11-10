// ONB-03 / AJ-04 — estado e regras dos horários de atendimento.
import { useState } from "react";
import { horariosValidos, validarHorarios } from "@/domain/horarios";

export function useHorariosForm(inicial) {
  const [horarios, setHorarios] = useState(inicial);

  const atualizarDia = (id, mudanca) =>
    setHorarios((h) => ({ ...h, dias: { ...h.dias, [id]: { ...h.dias[id], ...mudanca } } }));

  const atualizarPausa = (mudanca) =>
    setHorarios((h) => ({ ...h, pausa: { ...h.pausa, ...mudanca } }));

  return {
    horarios,
    setDiaAberto: (id, aberto) => atualizarDia(id, { aberto }),
    setDiaHorario: (id, { inicio, fim }) => atualizarDia(id, { inicio, fim }),
    setPausaAtiva: (ativa) => atualizarPausa({ ativa }),
    setPausaHorario: ({ inicio, fim }) => atualizarPausa({ inicio, fim }),
    problemas: validarHorarios(horarios),
    podeSalvar: horariosValidos(horarios),
  };
}
