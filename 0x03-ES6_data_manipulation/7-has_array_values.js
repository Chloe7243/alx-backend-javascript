export default function hasValuesFromArray(set, arr) {
  return set instanceof Set && Array.isArray(arr)
    ? arr.every((value) => set.has(value))
    : false;
}
