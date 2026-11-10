import { Logo } from "@/presentation/components/ui/Logo";

export default function HomePage() {
  return (
    <main className="mx-auto max-w-md p-6">
      <h1>
        <Logo as="span" />
      </h1>
      <p className="mt-2 text-ink-2">Agenda online para profissionais autônomos.</p>
    </main>
  );
}
