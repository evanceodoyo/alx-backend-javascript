export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter(
      (student) => student.location === city,
    )
    .map(
      (student) => ({
        id: student.id,
        firstName: student.firstName,
        location: student.location,
        grade: (
          newGrades.filter(
            (sgrade) => sgrade.studentId === student.id,
          ).pop() || { grade: 'N/A' }).grade,
      }),
    );
}
