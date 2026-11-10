// ONB-03 / AJ-04 — Lista dos dias da semana + pausa para almoço.
// Usado no cadastro (passo 3) e, depois, em Ajustes › Horários.
import { DIAS_DA_SEMANA } from "@/domain/horarios";
import { ListGroup } from "@/presentation/components/ui/ListGroup";
import { Switch } from "@/presentation/components/ui/Switch";
import { TimeRangeField } from "@/presentation/components/ui/TimeRangeField";
import { cn } from "@/presentation/utils/cn";

/** form: retorno de useHorariosForm. */
export function HorariosSemana({ form }) {
  const { dias, pausa } = form.horarios;
  const { diasInvalidos, pausaInvalida, nenhumDiaAberto } = form.problemas;

  return (
    <>
      <ListGroup inset>
        {DIAS_DA_SEMANA.map(({ id, nome }) => {
          const dia = dias[id];
          return (
            <div key={id} className="flex items-center gap-3 py-2.5 pr-3.5 pl-4">
              <Switch
                size="sm"
                label={`Atende ${nome}`}
                checked={dia.aberto}
                onChange={(aberto) => form.setDiaAberto(id, aberto)}
              />
              <p
                className={cn(
                  "min-w-0 flex-1 text-[15px] font-semibold tracking-[-0.15px]",
                  dia.aberto ? "text-ink" : "text-ink-2",
                )}
              >
                {nome}
              </p>
              {dia.aberto ? (
                <TimeRangeField
                  label={`Horário de ${nome}`}
                  start={dia.inicio}
                  end={dia.fim}
                  invalid={diasInvalidos.includes(id)}
                  onChange={(faixa) => form.setDiaHorario(id, faixa)}
                />
              ) : (
                <p className="text-sm text-ink-2">Fechado</p>
              )}
            </div>
          );
        })}
      </ListGroup>

      <ListGroup>
        <div className="flex items-center gap-3 py-3 pr-3.5 pl-4">
          <Switch
            size="sm"
            label="Pausa para almoço"
            checked={pausa.ativa}
            onChange={form.setPausaAtiva}
          />
          <div className="flex min-w-0 flex-1 flex-col gap-px">
            <p className="text-[15px] font-semibold tracking-[-0.15px] whitespace-nowrap text-ink">
              Pausa para almoço
            </p>
            <p className="text-[13px] text-ink-2">Todos os dias</p>
          </div>
          {pausa.ativa && (
            <TimeRangeField
              label="Pausa para almoço"
              start={pausa.inicio}
              end={pausa.fim}
              invalid={pausaInvalida}
              onChange={form.setPausaHorario}
            />
          )}
        </div>
      </ListGroup>

      {(diasInvalidos.length > 0 || pausaInvalida) && (
        <p className="text-[13px] font-medium text-danger" role="alert">
          O horário de fim precisa ser depois do início.
        </p>
      )}
      {nenhumDiaAberto && (
        <p className="text-[13px] font-medium text-danger" role="alert">
          Ligue pelo menos um dia para receber agendamentos.
        </p>
      )}
    </>
  );
}
