export default function getListStudentIds (StudentsList) {
    if (!Array.isArray(StudentsList))
    {
        return [];
    }
    return IdList = StudentsList.map(student => student.id);
}