// AUTH-03 — Entrar
import { Link, useNavigate } from "react-router";
import { Button } from "@/presentation/components/ui/Button";
import { Logo } from "@/presentation/components/ui/Logo";
import { AgendaPreview } from "@/presentation/components/cadastro/AgendaPreview";
import emailIcon from "@/presentation/assets/icons/email.svg";
export default function EntrarPage() {
  // TODO(AUTH-03): ligar ao login quando o back-end existir.
  const navigate = useNavigate();
  // Por enquanto só segue para o cadastro.
  const entrarComGoogle = () => navigate("/cadastro/1");
  const receberLinkPorEmail = () => {};
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-paper pt-3">
      <div className="flex flex-1 flex-col gap-7 px-5 pt-7 pb-4">
        <Logo />
        <AgendaPreview />
        <div className="flex flex-col gap-2">
          <h1 className="text-[28px] leading-[1.12] font-semibold tracking-[-0.84px] text-ink">
            Sua agenda cheia, sem ficar trocando mensagem.
          </h1>
          <p className="text-[15px] leading-[1.45] text-ink-2">
            Um link para seus clientes marcarem sozinhos. Você só aparece para atender.
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5 px-5 pt-3 pb-8.5">
        <Button className="w-full" onClick={entrarComGoogle}>
          Continuar com Google
        </Button>
        <Button
          variant="texto"
          className="-my-[13px] h-11 px-3 text-[15px] tracking-[-0.15px]"
          onClick={receberLinkPorEmail}
        >
          <img src={emailIcon} alt="" width={18} height={18} />
          Receber link de acesso por e-mail
        </Button>
        <p className="text-center text-xs leading-[1.45] text-ink-2">
          Ao continuar, você aceita os{" "}
          <Link to="/termos" className="underline-offset-2 hover:underline">
            Termos de uso
          </Link>{" "}
          e a{" "}
          <Link to="/privacidade" className="underline-offset-2 hover:underline">
            Política de privacidade
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
