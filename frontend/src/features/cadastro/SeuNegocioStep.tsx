// ONB-01 — Cadastro 1/4: seu negócio
import { useState } from "react";
import { useNavigate } from "react-router";
import { PhotoInput } from "@/components/ui/PhotoInput";
import { TextField } from "@/components/ui/TextField";
import { isValidSlug, toSlug } from "@/lib/slug";
import { formatTelefone, isTelefoneCompleto } from "@/lib/telefone";
import checkIcon from "@/assets/icons/check.svg";
import { CadastroLayout } from "./CadastroLayout";

export function SeuNegocioStep() {
  const navigate = useNavigate();
  const [foto, setFoto] = useState<File | null>(null);
  const [nome, setNome] = useState("");
  const [link, setLink] = useState("");
  const [linkEditado, setLinkEditado] = useState(false);
  const [whatsapp, setWhatsapp] = useState("");
  const [endereco, setEndereco] = useState("");

  // O link acompanha o nome até a pessoa mexer nele.
  const slug = linkEditado ? link : toSlug(nome);
  const linkValido = isValidSlug(slug);
  // TODO(ONB-01): checar no back-end se o link está livre.
  const linkHint = !slug
    ? "Só letras e números. Dá para mudar depois."
    : linkValido
      ? "Disponível. Dá para mudar depois."
      : "Use de 3 a 30 letras ou números.";

  const podeContinuar = nome.trim().length > 0 && linkValido && isTelefoneCompleto(whatsapp);

  return (
    <CadastroLayout
      passo={1}
      title="Como seus clientes te encontram?"
      canSubmit={podeContinuar}
      onSubmit={() => {
        // TODO(ONB-01): salvar { foto, nome, slug, whatsapp, endereco } quando houver back-end.
        navigate("/cadastro/2");
      }}
    >
      <PhotoInput
        title="Foto ou logo"
        description="Aparece no topo da sua página."
        value={foto}
        onChange={setFoto}
      />
      <TextField
        label="Nome do negócio"
        placeholder="Rafa Barber"
        autoComplete="organization"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        label="Seu link"
        prefix="agendeaqui.com.br/"
        placeholder="seunegocio"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        value={slug}
        onChange={(e) => {
          setLinkEditado(true);
          setLink(toSlug(e.target.value));
        }}
        suffix={linkValido ? <img src={checkIcon} alt="" width={18} height={18} /> : undefined}
        hint={linkHint}
        hintTone={!slug ? "neutro" : linkValido ? "sucesso" : "erro"}
      />
      <TextField
        label="WhatsApp do negócio"
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        placeholder="(19) 9 8123-4567"
        value={whatsapp}
        onChange={(e) => setWhatsapp(formatTelefone(e.target.value))}
        hint="Os clientes falam com você por aqui."
      />
      <TextField
        label="Endereço (opcional)"
        autoComplete="street-address"
        placeholder="R. Barão de Jaguara, 1200 · Centro"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
    </CadastroLayout>
  );
}
