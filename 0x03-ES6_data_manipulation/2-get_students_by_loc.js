export default function getStudentsByLocation(StudentsList, city) {
  return StudentsList.filter((student) => student.location === city);
}
