export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const studentsCity = studentList.filter((student) => student.location === city);
  const studentsGrades = studentsCity.map((student) => {
    const matchingId = newGrades.find((grade) => student.id === grade.studentId);

    if (matchingId) {
      return { ...student, grade: matchingId.grade };
    }
    return { ...student, grade: 'N/A' };
  });

  return studentsGrades;
}
