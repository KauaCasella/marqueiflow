// LP-01 — Landing page da rota principal (Figma · Landing page, celular e computador).
// Feita parte por parte: topo, chamada principal, como funciona, vantagens e para quem.
import { LandingComoFunciona } from "@/presentation/components/landing/LandingComoFunciona";
import { LandingHero } from "@/presentation/components/landing/LandingHero";
import { LandingParaQuem } from "@/presentation/components/landing/LandingParaQuem";
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
      </main>
    </div>
  );
}
