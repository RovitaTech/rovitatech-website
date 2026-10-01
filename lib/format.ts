const words = [
  "Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
  "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen",
  "Nineteen", "Twenty",
] as const;

/** 14 -> "Fourteen". Falls back to digits beyond twenty. */
export function numberWord(value: number): string {
  return words[value] ?? String(value);
}
