export default function getListStudentIds(obj) {
  return Array.isArray(obj) ? obj.map((item) => item.id) : [];
}
