export default function appendToEachArrayValue(array, appendString) {
  const newValues = [];
  for (const value of array) {
    newValues.push(appendString + value);
  }

  return array;
}
