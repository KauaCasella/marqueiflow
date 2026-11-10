/**
 * Regras de serviço (puras, sem React e sem API).
 *
 * Serviço: { id, nome, descricao, duracaoMin, preco, sinal, intervaloMin, visivel, destaque }
 * sinal: null (sem sinal) | { tipo: "percentual", valor: 30 } | { tipo: "fixo", valor: 10 }
 */
import { formatarDuracao, formatarMoeda } from "./formatacao";

/** Quanto o cliente paga ao agendar. */
export function calcularSinal(preco, sinal) {
  if (!sinal || preco == null) return 0;
  if (sinal.tipo === "percentual") return Math.round(preco * sinal.valor) / 100;
  return Math.min(sinal.valor, preco);
}

/** Linha de baixo do cartão: "50 min · sinal de R$ 18". */
export function resumoServico(servico) {
  const partes = [formatarDuracao(servico.duracaoMin)];
  const valorSinal = calcularSinal(servico.preco, servico.sinal);
  if (valorSinal > 0) partes.push(`sinal de ${formatarMoeda(valorSinal)}`);
  return partes.join(" · ");
}

/** Lista de problemas do serviço; vazia = pode salvar. */
export function validarServico(servico) {
  const erros = [];
  if (!servico.nome?.trim()) erros.push("nome");
  if (!(servico.duracaoMin > 0)) erros.push("duracao");
  if (!(servico.preco > 0)) erros.push("preco");
  if (servico.sinal) {
    if (!(servico.sinal.valor > 0)) erros.push("sinal");
    if (servico.sinal.tipo === "fixo" && servico.sinal.valor > servico.preco) erros.push("sinal");
  }
  return erros;
}
