import { describe, expect, it } from "vitest";
import { formatTelefone, isTelefoneCompleto } from "./telefone";

describe("formatTelefone", () => {
  it("formata enquanto digita", () => {
    expect(formatTelefone("1")).toBe("(1");
    expect(formatTelefone("199")).toBe("(19) 9");
    expect(formatTelefone("1998123")).toBe("(19) 9 8123");
    expect(formatTelefone("19981234567")).toBe("(19) 9 8123-4567");
  });

  it("ignora o que não é número e corta o excesso", () => {
    expect(formatTelefone("(19) 9 8123-45678")).toBe("(19) 9 8123-4567");
  });
});

describe("isTelefoneCompleto", () => {
  it("exige DDD + 9 dígitos", () => {
    expect(isTelefoneCompleto("(19) 9 8123-4567")).toBe(true);
    expect(isTelefoneCompleto("(19) 9 8123")).toBe(false);
  });
});
