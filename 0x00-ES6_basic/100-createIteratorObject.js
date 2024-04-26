export default function createIteratorObject(report) {
  const allEmployees = [...Object.values(report.allEmployees)];
  const employeeArr = [];

  for (const val of allEmployees) {
    employeeArr.push(...val);
  }

  return employeeArr;
}
