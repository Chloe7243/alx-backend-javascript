const fs = require('fs');
const http = require('http');

const app = http.createServer((req, res) => {
  if (req.url === '/students') {
    const responseParts = ['This is the list of our students'];
    const path = process.argv[2];
    (() =>
      new Promise((resolve, reject) => {
        fs.readFile(path, 'utf-8', (err, data) => {
          if (err) {
            responseParts.push('Cannot load the database');
          } else {
            const students = data
              .split('\n')
              .slice(1)
              .map((student) => student.replace('\r', ''))
              .filter((student) => student !== '');

            const groupedStudents = students.reduce((obj, student) => {
              const studentDetails = student.split(',');
              const groupName = studentDetails[3];
              if (!groupName) return obj;
              if (!obj[groupName]) obj[groupName] = [];
              obj[groupName].push(studentDetails[0]);
              return obj;
            }, {});

            responseParts.push(`Number of students: ${students.length}`);
            Object.entries(groupedStudents).forEach(([key, value]) => {
              responseParts.push(
                `Number of students in ${key}: ${value.length}. List: ${value
                  .join(', ')
                  .replace('/n', '')}`
              );
            });

            resolve(true);
          }
          const responseText = responseParts.join('\n');
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/plain');
          res.setHeader('Content-Length', responseText.length);
          res.write(Buffer.from(responseText));
        });
      }))();
  } else res.end('Hello Holberton School!');
});

app.listen(1245);

module.exports = app;
