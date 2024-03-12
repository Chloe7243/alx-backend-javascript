export default function updateUniqueItems(map) {
  return map instanceof Map
    ? map.forEach((value, key) => map.set(key, +value === 1 ? 100 : value))
    : new Map();
}
