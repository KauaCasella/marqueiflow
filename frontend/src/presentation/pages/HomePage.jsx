// LP-01 — Landing page da rota principal (Figma · Landing page, celular e computador).
// Feita parte por parte: topo, chamada principal, como funciona, vantagens, para quem e preço.
import { LandingComoFunciona } from "@/presentation/components/landing/LandingComoFunciona";
import { LandingHero } from "@/presentation/components/landing/LandingHero";
import { LandingParaQuem } from "@/presentation/components/landing/LandingParaQuem";
import { LandingPreco } from "@/presentation/components/landing/LandingPreco";
import { LandingTopo } from "@/presentation/components/landing/LandingTopo";
import { LandingVantagens } from "@/presentation/components/landing/LandingVantagens";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col bg-paper">
      <LandingTopo />
      <main>
        <LandingHero />
        <LandingComoFunciona />
        <LandingVantagens />
        <LandingParaQuem />
        <LandingPreco />
      </main>
    </div>
  );
}
