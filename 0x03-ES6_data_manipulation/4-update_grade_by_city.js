export default function updateStudentGradeByCity(StudentList, city, newGrades) {
    let StudentsCity = StudentList.filter((student) => student.location === city);
    let StudentsGrades = StudentsCity.map((student) => {
        let matchingId = newGrades.find((grade) => student.id === grade.studentId);

        if (matchingId) {
            student.grade = matchingId.grade;
        } else {
            student.grade = 'N/A';
        }

        return student;
    });

    return StudentsGrades;
}
