// LP-01 — Landing page da rota principal (Figma · Landing page, celular e computador).
// Feita parte por parte: topo, chamada principal e como funciona.
import { LandingComoFunciona } from "@/presentation/components/landing/LandingComoFunciona";
import { LandingHero } from "@/presentation/components/landing/LandingHero";
import { LandingTopo } from "@/presentation/components/landing/LandingTopo";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col bg-paper">
      <LandingTopo />
      <main>
        <LandingHero />
        <LandingComoFunciona />
      </main>
    </div>
  );
}
