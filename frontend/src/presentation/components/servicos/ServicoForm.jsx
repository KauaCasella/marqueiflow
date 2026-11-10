// AJ-03 / ONB-02 — Formulário de serviço (Figma: 15 · Adicionar serviço).
// Usado no cadastro (passo 2) e, depois, em Ajustes › Serviços.
import {
  OPCOES_DURACAO,
  OPCOES_INTERVALO,
  OPCOES_SINAL,
  useServicoForm,
} from "@/application/servicos/useServicoForm";
import { formatarDuracao, formatarMoeda } from "@/domain/formatacao";
import { resumoServico } from "@/domain/servico";
import { Button } from "@/presentation/components/ui/Button";
import { ChoiceChips } from "@/presentation/components/ui/ChoiceChips";
import { IconButton } from "@/presentation/components/ui/IconButton";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { ListRow } from "@/presentation/components/ui/ListRow";
import { Switch } from "@/presentation/components/ui/Switch";
import { TextField } from "@/presentation/components/ui/TextField";
import voltarIcon from "@/presentation/assets/icons/voltar-18.svg";

const duracoes = [
  ...OPCOES_DURACAO.map((min) => ({ value: min, label: formatarDuracao(min) })),
  { value: "outro", label: "Outro" },
];
const sinais = [
  ...OPCOES_SINAL.map((pct) => ({ value: pct, label: `${pct}%` })),
  { value: "fixo", label: "Valor fixo" },
];
const intervalos = OPCOES_INTERVALO.map((min) => ({
  value: min,
  label: min === 0 ? "Nenhum" : formatarDuracao(min),
}));

function Secao({ titulo, descricao, children }) {
  return (
    <section className="flex w-full flex-col gap-2">
      <h2 className="text-sm font-semibold text-ink">{titulo}</h2>
      {descricao && <p className="text-[13px] leading-[1.4] text-ink-2">{descricao}</p>}
      {children}
    </section>
  );
}

export function ServicoForm({ titulo = "Novo serviço", inicial, onBack, onSave }) {
  const form = useServicoForm(inicial);
  const c = form.campos;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.podeSalvar) onSave(form.servico);
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto flex min-h-dvh w-full max-w-[430px] flex-col bg-paper pt-3"
    >
      <header className="flex h-13 items-center gap-3 px-5">
        <IconButton icon={voltarIcon} iconSize={18} label="Voltar" onClick={onBack} />
        <h1 className="flex-1 text-[17px] font-semibold tracking-[-0.17px] text-ink">{titulo}</h1>
      </header>

      <main className="flex flex-1 flex-col gap-6 px-5 pt-3 pb-6">
        <TextField
          label="Nome do serviço"
          placeholder="Sobrancelha na navalha"
          value={c.nome}
          onChange={(e) => form.setNome(e.target.value)}
        />
        <TextField
          label="Descrição (opcional)"
          placeholder="Ex.: inclui lavagem e finalização"
          value={c.descricao}
          onChange={(e) => form.setDescricao(e.target.value)}
          hint="Aparece embaixo do nome, na sua página."
        />

        <Secao
          titulo="Duração"
          descricao="A agenda usa esse tempo para mostrar só horários que cabem."
        >
          <ChoiceChips
            label="Duração"
            options={duracoes}
            value={c.duracaoOpcao}
            onChange={form.setDuracaoOpcao}
          />
          {c.duracaoOpcao === "outro" && (
            <TextField
              aria-label="Duração em minutos"
              inputMode="numeric"
              placeholder="Ex.: 40"
              value={c.duracaoOutro}
              onChange={(e) => form.setDuracaoOutro(e.target.value)}
              suffix={<span className="text-base text-ink-2">min</span>}
            />
          )}
        </Secao>

        <TextField
          label="Preço"
          prefix="R$"
          prefixClassName="mr-1 text-ink"
          inputMode="decimal"
          placeholder="25"
          value={c.precoTexto}
          onChange={(e) => form.setPrecoTexto(e.target.value)}
        />

        <ListGroup inset>
          <ListRow
            size="md"
            title="Cobrar sinal via Pix"
            description="Segura o horário e reduz faltas."
            trailing={
              <Switch
                label="Cobrar sinal via Pix"
                checked={c.cobrarSinal}
                onChange={form.setCobrarSinal}
              />
            }
          />
          {c.cobrarSinal && (
            <div className="flex flex-col gap-2.5 px-4 pt-3.5 pb-4">
              <h2 className="text-sm font-semibold text-ink">Quanto do valor</h2>
              <ChoiceChips
                label="Quanto do valor"
                options={sinais}
                value={c.sinalOpcao}
                onChange={form.setSinalOpcao}
              />
              {c.sinalOpcao === "fixo" && (
                <TextField
                  aria-label="Valor do sinal"
                  prefix="R$"
                  prefixClassName="mr-1 text-ink"
                  inputMode="decimal"
                  placeholder="10"
                  value={c.sinalFixoTexto}
                  onChange={(e) => form.setSinalFixoTexto(e.target.value)}
                  hint={form.erros.includes("sinal") ? "O sinal não pode passar do preço." : null}
                  hintTone="erro"
                />
              )}
              {form.valorSinal > 0 && (
                <p className="rounded-xl bg-accent-soft px-3 py-2.5 text-[13px] leading-[1.4] text-ink-2">
                  O cliente paga{" "}
                  <strong className="font-semibold text-ink">
                    {formatarMoeda(form.valorSinal)}
                  </strong>{" "}
                  ao agendar e o resto no dia.
                </p>
              )}
            </div>
          )}
        </ListGroup>

        <Secao
          titulo="Intervalo depois do atendimento"
          descricao="Tempo para limpar e organizar antes do próximo cliente."
        >
          <ChoiceChips
            label="Intervalo depois do atendimento"
            options={intervalos}
            value={c.intervaloMin}
            onChange={form.setIntervaloMin}
          />
        </Secao>

        <ListGroup inset>
          <ListRow
            size="md"
            title="Mostrar na minha página"
            description="Desligado, só você consegue marcar este serviço."
            trailing={
              <Switch
                label="Mostrar na minha página"
                checked={c.visivel}
                onChange={form.setVisivel}
              />
            }
          />
          <ListRow
            size="md"
            title="Destacar como “mais pedido”"
            trailing={
              <Switch
                label="Destacar como mais pedido"
                checked={c.destaque}
                onChange={form.setDestaque}
              />
            }
          />
        </ListGroup>

        <section className="flex flex-col gap-2.5">
          <h2 className="text-sm font-semibold text-ink">Assim o cliente vê</h2>
          <ListGroup>
            <ListRow
              rowClassName="py-4.5"
              title={form.servico.nome || "Nome do serviço"}
              description={resumoServico(form.servico)}
              trailing={formatarMoeda(form.servico.preco ?? 0)}
            />
          </ListGroup>
        </section>
      </main>

      <footer className="sticky bottom-0 border-t border-line bg-surface px-5 pt-3 pb-8.5">
        <Button type="submit" className="w-full" disabled={!form.podeSalvar}>
          Salvar serviço
        </Button>
      </footer>
    </form>
  );
}
