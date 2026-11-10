// ONB-01 — estado e regras do passo 1 do cadastro (seu negócio).
import { useState } from "react";
import { formatarTelefone, gerarSlug } from "@/domain/formatacao";
import { slugValido, telefoneCompleto } from "@/domain/validacao";

export function useSeuNegocioForm() {
  const [foto, setFoto] = useState(null);
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [linkEditado, setLinkEditado] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [endereco, setEndereco] = useState("");

  // O link acompanha o nome até a pessoa mexer nele.
  const slug = linkEditado ? link : gerarSlug(nome);
  const linkValido = slugValido(slug);
  // TODO(ONB-01): checar na API (infrastructure) se o link está livre.
  const linkStatus = !slug ? "vazio" : linkValido ? "disponivel" : "invalido";

  const podeContinuar = nome.trim().length > 0 && linkValido && telefoneCompleto(whatsapp);

  return {
    valores: { foto, nome, slug, whatsapp, endereco },
    linkStatus,
    podeContinuar,
    setFoto,
    setNome,
    setLink: (valor) => {
      setLinkEditado(true);
      setLink(gerarSlug(valor));
    },
    setWhatsapp: (valor) => setWhatsapp(formatarTelefone(valor)),
    setEndereco,
  };
}
