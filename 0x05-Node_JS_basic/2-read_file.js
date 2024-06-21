const fs = require('node:fs');

function countStudents (path) {
  fs.readFileSync(path, 'utf8', (err, data) => {
    if (err) {
      throw new Error('Cannot load the database');
    }
    const rows = data.trim().split('\n').slice(1);
    const columns = [];
    for (let i = 0; i < rows.length; i++) {
      columns.push(rows[i].split(','));
    }

    const studentFields = {};
    for (let col = 0; col < columns.length; col++) {
      const field = columns[col][columns[col].length - 1];
      const studentName = columns[col][0];

      if (!(field in studentFields)) {
        studentFields[field] = [studentName];
      } else {
        studentFields[field].push(studentName);
      }
    }
    console.log(`Number of students: ${rows.length}`);
    for (const fld in studentFields) {
      const studentList = studentFields[fld];
      console.log(`Number of students in ${fld}: ${studentList.length}. List: ${studentList.join(', ')}`);
    }
  });
}

module.exports = countStudents;
