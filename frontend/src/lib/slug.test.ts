import { describe, expect, it } from "vitest";
import { isValidSlug, toSlug } from "./slug";

describe("toSlug", () => {
  it("tira espaço, acento e maiúscula", () => {
    expect(toSlug("Rafa Barber")).toBe("rafabarber");
    expect(toSlug("Estúdio Ana & Cia.")).toBe("estudioanacia");
  });
});

describe("isValidSlug", () => {
  it("aceita de 3 a 30 letras ou números", () => {
    expect(isValidSlug("rafabarber")).toBe(true);
    expect(isValidSlug("ab")).toBe(false);
    expect(isValidSlug("rafa-barber")).toBe(false);
  });
});
