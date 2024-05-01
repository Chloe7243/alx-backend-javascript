const express = require("express");
const app = express();
const port = 1245;

app.get("/", (_, res) => {
  res.send("Hello Holberton School!");
});

app.get("/students", (_, res) => {
  res.send(`This is the list of our students\n`);
  const path = process.argv[2];
  (async () => {
    try {
      const data = await fsPromises.readFile(path, { encoding: "utf8" });
      const students = data
        .split("\n")
        .slice(1)
        .map((student) => student.replace("\r", ""))
        .filter((student) => student != "");
      console.log(students);

      const groupedStudents = students.reduce((obj, student) => {
        const studentDetails = student.split(",");
        const groupName = studentDetails[3];
        if (!groupName) return obj;
        if (!obj[groupName]) obj[groupName] = [];
        obj[groupName].push(studentDetails[0]);
        return obj;
      }, {});

      res.send(`Number of students: ${students.length}\n`);
      const text = [];
      Object.entries(groupedStudents).forEach(([key, value]) => {
        text.push(
          `Number of students in ${key}: ${value.length}. List: ${value
            .join(", ")
            .replace("/n", "")}`
        );
      });
      res.end(text.join("\n"));
    } catch (err) {
      throw new Error("Cannot load the database");
    }
  })();
});

app.listen(port);

module.exports = app;
