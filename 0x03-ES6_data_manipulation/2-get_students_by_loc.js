export default function getStudentsByLocation(obj, city) {
  return Array.isArray(obj) ? obj.filter((item) => item.location === city) : [];
}
