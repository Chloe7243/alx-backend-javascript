export default function getListStudentIds(obj) {
  return obj instanceof Array ? obj?.map((item) => item.id) : [];
}
