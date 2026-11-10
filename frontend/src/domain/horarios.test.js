import { describe, expect, it } from "vitest";
import {
  horariosPadrao,
  horariosValidos,
  intervaloValido,
  paraMinutos,
  validarHorarios,
} from "./horarios";

describe("paraMinutos", () => {
  it("converte HH:MM em minutos do dia", () => {
    expect(paraMinutos("00:00")).toBe(0);
    expect(paraMinutos("09:30")).toBe(570);
    expect(paraMinutos("23:59")).toBe(1439);
  });
  it("rejeita formato errado", () => {
    expect(paraMinutos("9:30")).toBeNaN();
    expect(paraMinutos("24:00")).toBeNaN();
    expect(paraMinutos("")).toBeNaN();
  });
});

describe("intervaloValido", () => {
  it("fim precisa ser depois do início", () => {
    expect(intervaloValido({ inicio: "09:00", fim: "19:00" })).toBe(true);
    expect(intervaloValido({ inicio: "19:00", fim: "09:00" })).toBe(false);
    expect(intervaloValido({ inicio: "09:00", fim: "09:00" })).toBe(false);
  });
});

describe("validarHorarios", () => {
  it("o padrão é válido", () => {
    expect(horariosValidos(horariosPadrao())).toBe(true);
  });

  it("aponta dia aberto com horário invertido", () => {
    const h = horariosPadrao();
    h.dias.ter.fim = "08:00";
    expect(validarHorarios(h).diasInvalidos).toEqual(["ter"]);
  });

  it("ignora dia fechado com horário errado", () => {
    const h = horariosPadrao();
    h.dias.dom = { aberto: false, inicio: "18:00", fim: "08:00" };
    expect(horariosValidos(h)).toBe(true);
  });

  it("exige pelo menos um dia aberto", () => {
    const h = horariosPadrao();
    Object.values(h.dias).forEach((d) => (d.aberto = false));
    expect(validarHorarios(h).nenhumDiaAberto).toBe(true);
  });

  it("valida a pausa só quando ativa", () => {
    const h = horariosPadrao();
    h.pausa = { ativa: true, inicio: "13:00", fim: "12:00" };
    expect(validarHorarios(h).pausaInvalida).toBe(true);
    h.pausa.ativa = false;
    expect(horariosValidos(h)).toBe(true);
  });
});
