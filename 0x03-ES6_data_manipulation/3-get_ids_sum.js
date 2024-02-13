export default function getStudentIdsSum(StudentsList) {
    return StudentsList.reduce((accumulator, student) => accumulator + student.id, 0);
}