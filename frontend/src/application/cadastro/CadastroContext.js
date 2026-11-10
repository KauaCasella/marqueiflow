import { createContext, useContext } from "react";

export const CadastroContext = createContext(null);

/**
 * Dados do cadastro do profissional, compartilhados entre os passos (ONB-01..05).
 * Precisa estar dentro de <CadastroProvider>.
 */
export function useCadastro() {
  const ctx = useContext(CadastroContext);
  if (!ctx) throw new Error("useCadastro precisa estar dentro de <CadastroProvider>.");
  return ctx;
}
