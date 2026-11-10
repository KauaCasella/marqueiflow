// AG-01 — Modal P3 · Enviar lembrete (só a tela; mensagem de exemplo do Figma)
import { BottomSheet } from "@/presentation/components/ui/BottomSheet";
import { Button } from "@/presentation/components/ui/Button";
import lapisIcon from "@/presentation/assets/icons/lapis-16-laranja.svg";

/**
 * Mostra a mensagem do lembrete como vai aparecer no WhatsApp e abre o app com ela pronta.
 * cliente: primeiro nome; mensagem: texto do lembrete.
 */
export function LembreteSheet({ open, onClose, cliente, mensagem }) {
  const abrirWhatsApp = () => {
    window.open(`https://wa.me/?text=${encodeURIComponent(mensagem)}`, "_blank", "noopener");
    onClose();
  };

  return (
    <BottomSheet
      open={open}
      onClose={onClose}
      title={`Lembrete para ${cliente}`}
      description="A mensagem abre pronta no seu WhatsApp. É só enviar."
    >
      <div className="rounded-2xl bg-paper p-3.5">
        <div className="flex flex-col gap-1.5 rounded-[14px] rounded-tl-sm bg-success-soft px-3.5 pt-3 pb-2.5">
          <p className="text-sm leading-[1.45] whitespace-pre-line text-ink">{mensagem}</p>
          <p className="self-start text-[11px] leading-[normal] font-medium text-ink-2">16:05</p>
        </div>
      </div>

      {/* TODO(AG-01): editar a mensagem antes de enviar. */}
      <button
        type="button"
        className="-my-3 flex h-11 pressable items-center gap-1.5 self-start text-sm font-semibold text-accent-strong"
      >
        <img src={lapisIcon} alt="" width={16} height={16} />
        Editar mensagem
      </button>

      <Button className="w-full" onClick={abrirWhatsApp}>
        Abrir no WhatsApp
      </Button>
    </BottomSheet>
  );
}
