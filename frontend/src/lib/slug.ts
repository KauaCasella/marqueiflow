/** "Rafa Barber" → "rafabarber". Só letras minúsculas e números, sem acento. */
export function toSlug(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "")
    .slice(0, 30);
}

export function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]{3,30}$/.test(slug);
}
