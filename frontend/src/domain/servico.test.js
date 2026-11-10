import { describe, expect, it } from "vitest";
import { calcularSinal, resumoServico, validarServico } from "./servico";

const base = {
  nome: "Sobrancelha na navalha",
  duracaoMin: 20,
  preco: 25,
  sinal: { tipo: "percentual", valor: 30 },
};

describe("calcularSinal", () => {
  it("calcula percentual do preço", () => {
    expect(calcularSinal(25, { tipo: "percentual", valor: 30 })).toBe(7.5);
    expect(calcularSinal(60, { tipo: "percentual", valor: 30 })).toBe(18);
  });
  it("valor fixo não passa do preço", () => {
    expect(calcularSinal(25, { tipo: "fixo", valor: 10 })).toBe(10);
    expect(calcularSinal(25, { tipo: "fixo", valor: 40 })).toBe(25);
  });
  it("sem sinal é zero", () => {
    expect(calcularSinal(25, null)).toBe(0);
  });
});

describe("resumoServico", () => {
  it("mostra duração e sinal", () => {
    expect(resumoServico(base)).toBe("20 min · sinal de R$ 7,50");
    expect(resumoServico({ ...base, duracaoMin: 30, preco: 40, sinal: null })).toBe("30 min");
  });
});

describe("validarServico", () => {
  it("aceita serviço completo", () => {
    expect(validarServico(base)).toEqual([]);
  });
  it("aponta o que falta", () => {
    expect(validarServico({ ...base, nome: " ", preco: null })).toEqual(["nome", "preco"]);
    expect(validarServico({ ...base, sinal: { tipo: "fixo", valor: 30 } })).toEqual(["sinal"]);
  });
});
