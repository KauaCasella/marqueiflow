// ONB-01 — estado e regras do passo 1 do cadastro (seu negócio).
import { useState } from "react";
import { formatarTelefone, gerarSlug } from "@/domain/formatacao";
import { slugValido, telefoneCompleto } from "@/domain/validacao";
import { useCadastro } from "./CadastroContext";

export function useSeuNegocioForm() {
  const cadastro = useCadastro();
  const inicial = cadastro.negocio;

  const [nome, setNome] = useState(inicial.nome);
  const [link, setLink] = useState(inicial.slug);
  const [linkEditado, setLinkEditado] = useState(inicial.linkEditado);
  const [whatsapp, setWhatsapp] = useState(inicial.whatsapp);
  const [endereco, setEndereco] = useState(inicial.endereco);

  // O link acompanha o nome até a pessoa mexer nele.
  const slug = linkEditado ? link : gerarSlug(nome);
  const linkValido = slugValido(slug);
  // TODO(ONB-01): checar na API (infrastructure) se o link está livre.
  const linkStatus = !slug ? "vazio" : linkValido ? "disponivel" : "invalido";

  const podeContinuar = nome.trim().length > 0 && linkValido && telefoneCompleto(whatsapp);

  return {
    valores: { foto: cadastro.foto, nome, slug, whatsapp, endereco },
    linkStatus,
    podeContinuar,
    setFoto: cadastro.setFoto,
    setNome,
    setLink: (valor) => {
      setLinkEditado(true);
      setLink(gerarSlug(valor));
    },
    setWhatsapp: (valor) => setWhatsapp(formatarTelefone(valor)),
    setEndereco,
    salvar: () =>
      cadastro.salvarNegocio({
        nome: nome.trim(),
        slug,
        linkEditado,
        whatsapp,
        endereco: endereco.trim(),
      }),
  };
}
