const fs = require('fs');

const readDatabase = (path = '../database.csv') => new Promise((resolve, reject) => {
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

    resolve(studentsGroupedByFields);
  });
});

module.exports = readDatabase;
