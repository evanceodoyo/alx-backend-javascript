const fs = require('fs').promises;
const express = require('express');

const app = express();

const countStudents = async (path = 'database.csv') => {
  try {
    const data = await fs.readFile(path, 'utf-8');
    const fileLines = data.trim().split('\n');
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

    return result.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

app.get('/', (_req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (_req, res) => {
  try {
    const result = await countStudents(process.argv[2]);
    res.status(200).send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

app.listen(1245);

module.exports = app;
