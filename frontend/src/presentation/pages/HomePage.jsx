// LP-01 — Landing page da rota principal (Figma · Landing page, celular e computador).
// Feita parte por parte: por enquanto o topo e a chamada principal.
import { LandingHero } from "@/presentation/components/landing/LandingHero";
import { LandingTopo } from "@/presentation/components/landing/LandingTopo";

export default function HomePage() {
  return (
    <div className="flex flex-1 flex-col bg-paper">
      <LandingTopo />
      <main>
        <LandingHero />
      </main>
    </div>
  );
}
