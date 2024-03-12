export default function getStudentIdsSum(obj) {
  return Array.isArray(obj) ? obj.reduce((acc, item) => acc + +item.id, 0) : 0;
}
