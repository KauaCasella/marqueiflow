// ONB-01 — Cadastro 1/4: seu negócio
import { useNavigate } from "react-router";
import { useSeuNegocioForm } from "@/application/cadastro/useSeuNegocioForm";
import { PhotoInput } from "@/presentation/components/ui/PhotoInput";
import { TextField } from "@/presentation/components/ui/TextField";
import checkIcon from "@/presentation/assets/icons/check.svg";
import { CadastroLayout } from "./CadastroLayout";

const linkHints = {
  vazio: { texto: "Só letras e números. Dá para mudar depois.", tom: "neutro" },
  disponivel: { texto: "Disponível. Dá para mudar depois.", tom: "sucesso" },
  invalido: { texto: "Use de 3 a 30 letras ou números.", tom: "erro" },
};

export function SeuNegocioStep() {
  const navigate = useNavigate();
  const form = useSeuNegocioForm();
  const { foto, nome, slug, whatsapp, endereco } = form.valores;
  const linkHint = linkHints[form.linkStatus];

  return (
    <CadastroLayout
      passo={1}
      title="Como seus clientes te encontram?"
      canSubmit={form.podeContinuar}
      onSubmit={() => {
        // TODO(ONB-01): salvar via infrastructure quando houver back-end.
        navigate("/cadastro/2");
      }}
    >
      <PhotoInput
        title="Foto ou logo"
        description="Aparece no topo da sua página."
        value={foto}
        onChange={form.setFoto}
      />
      <TextField
        label="Nome do negócio"
        placeholder="Rafa Barber"
        autoComplete="organization"
        value={nome}
        onChange={(e) => form.setNome(e.target.value)}
      />
      <TextField
        label="Seu link"
        prefix="agendeaqui.com.br/"
        placeholder="seunegocio"
        autoCapitalize="none"
        autoCorrect="off"
        spellCheck={false}
        value={slug}
        onChange={(e) => form.setLink(e.target.value)}
        suffix={
          form.linkStatus === "disponivel" ? (
            <img src={checkIcon} alt="" width={18} height={18} />
          ) : undefined
        }
        hint={linkHint.texto}
        hintTone={linkHint.tom}
      />
      <TextField
        label="WhatsApp do negócio"
        type="tel"
        inputMode="numeric"
        autoComplete="tel-national"
        placeholder="(19) 9 8123-4567"
        value={whatsapp}
        onChange={(e) => form.setWhatsapp(e.target.value)}
        hint="Os clientes falam com você por aqui."
      />
      <TextField
        label="Endereço (opcional)"
        autoComplete="street-address"
        placeholder="R. Barão de Jaguara, 1200 · Centro"
        value={endereco}
        onChange={(e) => form.setEndereco(e.target.value)}
      />
    </CadastroLayout>
  );
}
