// AJ-03 / ONB-02 — estado e regras do formulário de serviço (novo ou editar).
import { useState } from "react";
import { lerMoeda, limparMoedaDigitada } from "@/domain/formatacao";
import { calcularSinal, validarServico } from "@/domain/servico";

export const OPCOES_DURACAO = [15, 20, 30, 45, 60];
export const OPCOES_SINAL = [20, 30, 50];
export const OPCOES_INTERVALO = [0, 5, 10, 15];

export function useServicoForm(inicial = {}) {
  const [nome, setNome] = useState(inicial.nome ?? "");
  const [descricao, setDescricao] = useState(inicial.descricao ?? "");

  const duracaoInicial = inicial.duracaoMin ?? 30;
  const [duracaoOpcao, setDuracaoOpcao] = useState(
    OPCOES_DURACAO.includes(duracaoInicial) ? duracaoInicial : "outro",
  );
  const [duracaoOutro, setDuracaoOutro] = useState(
    OPCOES_DURACAO.includes(duracaoInicial) ? "" : String(duracaoInicial),
  );

  const [precoTexto, setPrecoTexto] = useState(
    inicial.preco != null ? String(inicial.preco).replace(".", ",") : "",
  );

  // Serviço novo já vem com sinal ligado (reduz faltas); ao editar, respeita o que estava.
  const [cobrarSinal, setCobrarSinal] = useState(
    inicial.nome == null ? true : Boolean(inicial.sinal),
  );
  const [sinalOpcao, setSinalOpcao] = useState(
    inicial.sinal?.tipo === "fixo" ? "fixo" : (inicial.sinal?.valor ?? 30),
  );
  const [sinalFixoTexto, setSinalFixoTexto] = useState(
    inicial.sinal?.tipo === "fixo" ? String(inicial.sinal.valor).replace(".", ",") : "",
  );

  const [intervaloMin, setIntervaloMin] = useState(inicial.intervaloMin ?? 5);
  const [visivel, setVisivel] = useState(inicial.visivel ?? true);
  const [destaque, setDestaque] = useState(inicial.destaque ?? false);

  const duracaoMin = duracaoOpcao === "outro" ? Number(duracaoOutro) || 0 : duracaoOpcao;
  const preco = lerMoeda(precoTexto);
  const sinal = !cobrarSinal
    ? null
    : sinalOpcao === "fixo"
      ? { tipo: "fixo", valor: lerMoeda(sinalFixoTexto) ?? 0 }
      : { tipo: "percentual", valor: sinalOpcao };

  const servico = {
    nome: nome.trim(),
    descricao: descricao.trim(),
    duracaoMin,
    preco,
    sinal,
    intervaloMin,
    visivel,
    destaque,
  };
  const erros = validarServico(servico);

  return {
    campos: {
      nome,
      descricao,
      duracaoOpcao,
      duracaoOutro,
      precoTexto,
      cobrarSinal,
      sinalOpcao,
      sinalFixoTexto,
      intervaloMin,
      visivel,
      destaque,
    },
    setNome,
    setDescricao,
    setDuracaoOpcao,
    setDuracaoOutro: (v) => setDuracaoOutro(v.replace(/\D/g, "").slice(0, 3)),
    setPrecoTexto: (v) => setPrecoTexto(limparMoedaDigitada(v)),
    setCobrarSinal,
    setSinalOpcao,
    setSinalFixoTexto: (v) => setSinalFixoTexto(limparMoedaDigitada(v)),
    setIntervaloMin,
    setVisivel,
    setDestaque,
    servico,
    valorSinal: calcularSinal(preco, sinal),
    erros,
    podeSalvar: erros.length === 0,
  };
}
