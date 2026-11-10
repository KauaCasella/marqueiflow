/**
 * Guarda dados na sessão do navegador (some ao fechar a aba).
 * Usado para não perder o cadastro ao trocar de passo, até existir back-end.
 */

export function lerDaSessao(chave, padrao) {
  try {
    const bruto = sessionStorage.getItem(chave);
    return bruto ? JSON.parse(bruto) : padrao;
  } catch {
    return padrao;
  }
}

export function salvarNaSessao(chave, valor) {
  try {
    sessionStorage.setItem(chave, JSON.stringify(valor));
  } catch {
    // Sem acesso ao armazenamento (aba anônima, bloqueio): segue só em memória.
  }
}

export function removerDaSessao(chave) {
  try {
    sessionStorage.removeItem(chave);
  } catch {
    // idem
  }
}
