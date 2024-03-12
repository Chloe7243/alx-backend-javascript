export default function getStudentsByLocation(obj, city, newGrades) {
  return Array.isArray(obj)
    ? obj
      .filter((item) => item.location === city)
      .map((student) => {
        const grade = newGrades.find((item) => student.id === item.studentId).grade
            || 'N/A';
        return { ...student, grade };
      })
    : [];
}
