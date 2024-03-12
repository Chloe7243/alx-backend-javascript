export default function hasValuesFromArray(set, arr) {
  return set instanceof Set && Array.isArray(arr)
    ? set.isSupersetOf(arr)
    : false;
}
