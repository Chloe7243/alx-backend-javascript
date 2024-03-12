export default function getStudentIdsSum(obj) {
  return obj instanceof Array
    ? obj?.reduce((acc, item) => (acc += +item.id), 0)
    : 0;
}
