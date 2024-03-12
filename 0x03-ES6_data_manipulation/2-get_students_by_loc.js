export default function getStudentsByLocation(obj, city) {
  return obj instanceof Array
    ? obj?.filter((item) => item.location === city)
    : [];
}
