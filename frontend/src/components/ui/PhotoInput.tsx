import { useEffect, useId, useMemo } from "react";
import { cn } from "@/lib/cn";
import cameraIcon from "@/assets/icons/camera.svg";

type PhotoInputProps = {
  title: string;
  description?: string;
  value: File | null;
  onChange: (file: File | null) => void;
  className?: string;
};

/** Escolher foto: círculo tracejado com câmera; mostra a prévia depois de escolher. */
export function PhotoInput({ title, description, value, onChange, className }: PhotoInputProps) {
  const id = useId();
  const preview = useMemo(() => (value ? URL.createObjectURL(value) : null), [value]);

  useEffect(() => {
    if (!preview) return;
    return () => URL.revokeObjectURL(preview);
  }, [preview]);

  return (
    <div className={cn("flex w-full items-center gap-3.5", className)}>
      <label
        htmlFor={id}
        className={cn(
          "pressable flex size-18 shrink-0 items-center justify-center overflow-hidden rounded-full bg-surface",
          !preview && "border-[1.5px] border-dashed border-ink-3",
        )}
      >
        {preview ? (
          <img src={preview} alt="" className="size-full object-cover" />
        ) : (
          <img src={cameraIcon} alt="" width={24} height={24} />
        )}
        <span className="sr-only">{preview ? "Trocar foto" : "Adicionar foto"}</span>
      </label>
      <input
        id={id}
        type="file"
        accept="image/*"
        className="sr-only"
        onChange={(e) => onChange(e.target.files?.[0] ?? null)}
      />
      <div className="flex min-w-0 flex-1 flex-col gap-0.5">
        <p className="text-[15px] font-semibold tracking-[-0.15px] text-ink">{title}</p>
        {description && <p className="text-[13px] text-ink-2">{description}</p>}
      </div>
    </div>
  );
}
