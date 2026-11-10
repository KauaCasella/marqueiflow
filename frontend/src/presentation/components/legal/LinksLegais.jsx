import { Link } from "react-router";

/** Links "Política de privacidade · Termos de uso" do rodapé das telas do cliente. */
export function LinksLegais() {
  return (
    <p className="flex items-center gap-2 text-xs leading-[normal] text-ink-2">
      <Link to="/privacidade" className="font-medium underline">
        Política de privacidade
      </Link>
      ·
      <Link to="/termos" className="font-medium underline">
        Termos de uso
      </Link>
    </p>
  );
}
