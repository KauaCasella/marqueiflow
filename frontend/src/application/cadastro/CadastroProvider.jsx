import { useCallback, useEffect, useMemo, useState } from "react";
import { lerDaSessao, salvarNaSessao } from "@/infrastructure/armazenamentoDaSessao";
import { CadastroContext } from "./CadastroContext";

const CHAVE = "agendeaqui:cadastro";

const vazio = {
  negocio: { nome: "", slug: "", linkEditado: false, whatsapp: "", endereco: "" },
  servicos: [],
};

/**
 * Guarda o cadastro enquanto a pessoa passa pelos passos.
 * TODO(ONB-01..05): enviar para a API (infrastructure) quando houver back-end.
 */
export function CadastroProvider({ children }) {
  const [dados, setDados] = useState(() => ({ ...vazio, ...lerDaSessao(CHAVE, {}) }));
  // A foto é um arquivo: fica só em memória (não cabe na sessão).
  const [foto, setFoto] = useState(null);

  useEffect(() => {
    salvarNaSessao(CHAVE, dados);
  }, [dados]);

  const salvarNegocio = useCallback((negocio) => {
    setDados((atual) => ({ ...atual, negocio }));
  }, []);

  const adicionarServico = useCallback((servico) => {
    setDados((atual) => ({
      ...atual,
      servicos: [...atual.servicos, { ...servico, id: crypto.randomUUID() }],
    }));
  }, []);

  const valor = useMemo(
    () => ({ ...dados, foto, setFoto, salvarNegocio, adicionarServico }),
    [dados, foto, salvarNegocio, adicionarServico],
  );

  return <CadastroContext.Provider value={valor}>{children}</CadastroContext.Provider>;
}
