/**
 * Parse the value or return the fallback
 * @param value value to parse
 * @param fallback fallback value if the value cannot be parsed
 * @returns the parsed value; returned as a number
 */
export function safeParseInt(value: string, fallback = 0) {
  const v = parseInt(value, 10);
  if (Number.isNaN(v)) {
    return fallback;
  }
  return v;
}
