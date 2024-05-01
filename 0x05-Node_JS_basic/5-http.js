const fs = require("fs");
const http = require("http");

const app = http.createServer((req, res) => {
  if (req.url === "/students") {
    return new Promise((resolve, reject) => {
      const path = process.argv[2];
      res.write("This is the list of our students\n");
      fs.readFile(path, "utf-8", (err, data) => {
        if (err) {
          reject(new Error("Cannot load the database"));
        } else {
          res.statusCode = 200;
          const students = data
            .split("\n")
            .slice(1)
            .map((student) => student.replace("\r", ""))
            .filter((student) => student !== "");

          const groupedStudents = students.reduce((obj, student) => {
            const studentDetails = student.split(",");
            const groupName = studentDetails[3];
            if (!groupName) return obj;
            if (!obj[groupName]) obj[groupName] = [];
            obj[groupName].push(studentDetails[0]);
            return obj;
          }, {});

          console.log(`Number of students: ${students.length}`);
          Object.entries(groupedStudents).forEach(([key, value]) => {
            console.log(
              `Number of students in ${key}: ${value.length}. List: ${value
                .join(", ")
                .replace("/n", "")}`
            );
          });
          resolve(true);
        }
      });
    });
  } else res.end("Hello Holberton School!");
});

app.listen(1245);

module.exports = app;
