/**
 * Validações (regras puras, sem React e sem API).
 */

/** Link do profissional: de 3 a 30 letras minúsculas ou números. */
export function slugValido(slug) {
  return /^[a-z0-9]{3,30}$/.test(slug);
}

/** Celular completo: DDD + 9 dígitos. */
export function telefoneCompleto(valor) {
  return valor.replace(/\D/g, "").length === 11;
}
