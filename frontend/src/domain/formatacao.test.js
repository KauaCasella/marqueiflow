import { describe, expect, it } from "vitest";
import { formatarTelefone, gerarSlug } from "./formatacao";

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
