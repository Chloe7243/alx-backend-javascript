export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).reduce(
    (arr, item) => [...arr, ...item],
    [],
  );
}
