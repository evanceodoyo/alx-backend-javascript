const fs = require('fs');
const http = require('http');

const countStudents = (path = 'database.csv') => new Promise((resolve, reject) => {
  fs.readFile(path, (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }

    const fileLines = data.toString('utf-8').trim().split('\n');
    const studentsGroupedByFields = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    for (const line of fileLines.slice(1)) {
      const studentRecord = line.split(',');
      const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
      const field = studentRecord[studentRecord.length - 1];
      if (!Object.keys(studentsGroupedByFields).includes(field)) {
        studentsGroupedByFields[field] = [];
      }
      const studentEntries = studentPropNames
        .map((propName, idx) => [propName, studentPropValues[idx]]);
      studentsGroupedByFields[field].push(Object.fromEntries(studentEntries));
    }

    const totalStudents = Object
      .values(studentsGroupedByFields)
      .reduce((pre, cur) => (pre || []).length + cur.length);
    let result = `Number of students: ${totalStudents}\n`;
    for (const [field, group] of Object.entries(studentsGroupedByFields)) {
      const studentNames = group.map((student) => student.firstname).join(', ');
      result += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
    }

    resolve(result);
  });
});

const app = http.createServer((req, res) => {
  switch (req.url) {
    case '/':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.end('Hello Holberton School!');
      break;
    case '/students':
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/plain');
      res.write('This is the list of our students\n');
      countStudents(process.argv[2])
        .then((result) => {
          res.end(result);
        })
        .catch((err) => {
          res.end(err.message);
        });
      break;
    default:
      res.statusCode = 404;
      res.end('Not found');
  }
});

app.listen(1245);

module.exports = app;
