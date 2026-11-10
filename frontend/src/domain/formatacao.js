/**
 * Formatação de dados (regras puras, sem React e sem API).
 */

/** "Rafa Barber" → "rafabarber". Só letras minúsculas e números, sem acento. */
export function gerarSlug(texto) {
  return texto
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 30);
}

/** Formata celular brasileiro enquanto digita: "19981234567" → "(19) 9 8123-4567". */
export function formatarTelefone(valor) {
  const d = valor.replace(/\D/g, "").slice(0, 11);
  if (d.length === 0) return "";
  if (d.length <= 2) return `(${d}`;
  if (d.length <= 3) return `(${d.slice(0, 2)}) ${d.slice(2)}`;
  if (d.length <= 7) return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3)}`;
  return `(${d.slice(0, 2)}) ${d.slice(2, 3)} ${d.slice(3, 7)}-${d.slice(7)}`;
}

/** 25 → "R$ 25"; 7.5 → "R$ 7,50". Centavos só aparecem quando existem. */
export function formatarMoeda(valor) {
  const inteiro = Number.isInteger(valor);
  return `R$ ${valor.toLocaleString("pt-BR", {
    minimumFractionDigits: inteiro ? 0 : 2,
    maximumFractionDigits: 2,
  })}`;
}

/** Texto digitado → número de reais. "25" → 25; "7,5" → 7.5; "" → null. */
export function lerMoeda(texto) {
  const limpo = texto.replace(/[^\d,]/g, "").replace(/,(?=.*,)/g, "");
  if (!limpo || limpo === ",") return null;
  const valor = Number(limpo.replace(",", "."));
  return Number.isFinite(valor) ? Math.round(valor * 100) / 100 : null;
}

/** Deixa só números e uma vírgula com até 2 casas, para campos de dinheiro. */
export function limparMoedaDigitada(texto) {
  const [inteiro, ...resto] = texto.replace(/[^\d,]/g, "").split(",");
  if (resto.length === 0) return inteiro;
  return `${inteiro},${resto.join("").slice(0, 2)}`;
}

/** 30 → "30 min"; 60 → "1 h"; 90 → "1 h 30 min". */
export function formatarDuracao(minutos) {
  const h = Math.floor(minutos / 60);
  const m = minutos % 60;
  if (h === 0) return `${m} min`;
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
}
