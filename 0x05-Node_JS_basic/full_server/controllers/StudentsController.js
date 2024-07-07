import readDatabase from '../utils';

export default class StudentsController {
  static async getAllStudents(request, response) {
    try {
      const result = await readDatabase(process.argv[2]);
      const sortedKeys = Object.keys(result)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

      const sortedResult = {};
      sortedKeys.forEach((key) => {
        sortedResult[key] = result[key];
      });

      let res = 'This is the list of our students\n';

      for (const [field, group] of Object.entries(sortedResult)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        res += `Number of students in ${field}: ${group.length}. List: ${studentNames}\n`;
      }

      return response.status(200).send(res);
    } catch (err) {
      return response.status(500).send(err.message);
    }
  }

  static async getAllStudentsByMajor(request, response) {
    try {
      const { major } = request.params;

      if (!major || !['CS', 'SWE'].includes(major)) {
        return response.status(500).send('Major parameter must be CS or SWE');
      }

      const result = await readDatabase(process.argv[2]);
      const names = result[major].map((student) => student.firstname).join(', ');

      return response.status(200).send(`List: ${names}`);
    } catch (err) {
      return response.status(500).send(err.message);
    }
  }
}
