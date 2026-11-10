import { describe, expect, it } from "vitest";
import { slugValido, telefoneCompleto } from "./validacao";

describe("slugValido", () => {
  it("aceita de 3 a 30 letras ou números", () => {
    expect(slugValido("rafabarber")).toBe(true);
    expect(slugValido("ab")).toBe(false);
    expect(slugValido("rafa-barber")).toBe(false);
  });
});

describe("telefoneCompleto", () => {
  it("exige DDD + 9 dígitos", () => {
    expect(telefoneCompleto("(19) 9 8123-4567")).toBe(true);
    expect(telefoneCompleto("(19) 9 8123")).toBe(false);
  });
});
