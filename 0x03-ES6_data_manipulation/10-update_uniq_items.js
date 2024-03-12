export default function updateUniqueItems(map) {
  if (map instanceof Map) {
    return map.forEach((value, key) => map.set(key, +value === 1 ? 100 : value));
  }
  throw new Error('Cannot process');
}
