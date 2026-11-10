/**
 * Horários de atendimento (regras puras, sem React e sem API).
 *
 * Horários: {
 *   dias: { seg: { aberto, inicio: "09:00", fim: "19:00" }, ..., dom: {...} },
 *   pausa: { ativa, inicio: "12:00", fim: "13:00" }   // vale para todos os dias
 * }
 */

export const DIAS_DA_SEMANA = [
  { id: "seg", nome: "Seg" },
  { id: "ter", nome: "Ter" },
  { id: "qua", nome: "Qua" },
  { id: "qui", nome: "Qui" },
  { id: "sex", nome: "Sex" },
  { id: "sab", nome: "Sáb" },
  { id: "dom", nome: "Dom" },
];

/** Ponto de partida do cadastro: seg a sex 9h–19h, sáb 8h–16h, domingo fechado, almoço 12h–13h. */
export function horariosPadrao() {
  const dia = (aberto, inicio, fim) => ({ aberto, inicio, fim });
  return {
    dias: {
      seg: dia(true, "09:00", "19:00"),
      ter: dia(true, "09:00", "19:00"),
      qua: dia(true, "09:00", "19:00"),
      qui: dia(true, "09:00", "19:00"),
      sex: dia(true, "09:00", "19:00"),
      sab: dia(true, "08:00", "16:00"),
      dom: dia(false, "09:00", "13:00"),
    },
    pausa: { ativa: true, inicio: "12:00", fim: "13:00" },
  };
}

/** "09:30" → 570. Valor inválido → NaN. */
export function paraMinutos(hora) {
  const m = /^(\d{2}):(\d{2})$/.exec(hora ?? "");
  if (!m) return NaN;
  const h = Number(m[1]);
  const min = Number(m[2]);
  if (h > 23 || min > 59) return NaN;
  return h * 60 + min;
}

/** O fim vem depois do início. */
export function intervaloValido({ inicio, fim }) {
  const a = paraMinutos(inicio);
  const b = paraMinutos(fim);
  return Number.isFinite(a) && Number.isFinite(b) && b > a;
}

/**
 * Problemas encontrados; tudo vazio/false = pode salvar.
 * { diasInvalidos: ["seg", ...], pausaInvalida, nenhumDiaAberto }
 */
export function validarHorarios(horarios) {
  const diasInvalidos = DIAS_DA_SEMANA.map((d) => d.id).filter((id) => {
    const dia = horarios.dias[id];
    return dia.aberto && !intervaloValido(dia);
  });
  const nenhumDiaAberto = DIAS_DA_SEMANA.every((d) => !horarios.dias[d.id].aberto);
  const pausaInvalida = horarios.pausa.ativa && !intervaloValido(horarios.pausa);
  return { diasInvalidos, pausaInvalida, nenhumDiaAberto };
}

export function horariosValidos(horarios) {
  const r = validarHorarios(horarios);
  return r.diasInvalidos.length === 0 && !r.pausaInvalida && !r.nenhumDiaAberto;
}
