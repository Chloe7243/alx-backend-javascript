export default function cleanSet(set, startString) {
  return set
    && startString
    && set instanceof Set
    && typeof startString === 'string'
    ? Array.from(set)
      .filter((string) => string.startsWith(startString))
      .map((string) => string.slice(startString.length))
      .join('-')
    : '';
}
