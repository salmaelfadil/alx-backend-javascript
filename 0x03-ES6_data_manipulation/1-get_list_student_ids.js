export default function getListStudentIds (StudentsList) {
    if (StudentsList instanceof Array)
    {
        return IdList = StudentsList.map(student => student.id);
    }
    return [];
}