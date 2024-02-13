export default function getListStudentIds(StudentsList) {
  if (StudentsList instanceof Array) {
    const IdList = StudentsList.map((student) => student.id);
    return IdList;
  }
  return [];
}
