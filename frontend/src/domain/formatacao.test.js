import { describe, expect, it } from "vitest";
import {
  formatarDuracao,
  formatarMoeda,
  formatarTelefone,
  gerarSlug,
  lerMoeda,
  limparMoedaDigitada,
} from "./formatacao";

describe("gerarSlug", () => {
  it("tira espaço, acento e maiúscula", () => {
    expect(gerarSlug("Rafa Barber")).toBe("rafabarber");
    expect(gerarSlug("Estúdio Ana & Cia.")).toBe("estudioanacia");
  });
});

describe("formatarTelefone", () => {
  it("formata enquanto digita", () => {
    expect(formatarTelefone("1")).toBe("(1");
    expect(formatarTelefone("199")).toBe("(19) 9");
    expect(formatarTelefone("1998123")).toBe("(19) 9 8123");
    expect(formatarTelefone("19981234567")).toBe("(19) 9 8123-4567");
  });

  it("ignora o que não é número e corta o excesso", () => {
    expect(formatarTelefone("(19) 9 8123-45678")).toBe("(19) 9 8123-4567");
  });
});

describe("moeda", () => {
  it("formata sem centavos quando é inteiro", () => {
    expect(formatarMoeda(25)).toBe("R$ 25");
    expect(formatarMoeda(7.5)).toBe("R$ 7,50");
    expect(formatarMoeda(1200)).toBe("R$ 1.200");
  });
  it("lê o que foi digitado", () => {
    expect(lerMoeda("25")).toBe(25);
    expect(lerMoeda("7,5")).toBe(7.5);
    expect(lerMoeda("")).toBe(null);
  });
  it("limpa a digitação", () => {
    expect(limparMoedaDigitada("R$ 7,505")).toBe("7,50");
    expect(limparMoedaDigitada("2a5")).toBe("25");
  });
});

describe("formatarDuracao", () => {
  it("usa min e h", () => {
    expect(formatarDuracao(30)).toBe("30 min");
    expect(formatarDuracao(60)).toBe("1 h");
    expect(formatarDuracao(90)).toBe("1 h 30 min");
  });
});
