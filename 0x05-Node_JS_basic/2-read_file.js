const fs = require("fs");

const countStudents = (path) => {
  try {
    const data = fs.readFileSync(path, "utf8");
    const students = data
      .split("\n")
      .slice(1)
      .map((student) => student.replace("\r", ""))
      .filter((student) => student !== "");
    const groupedStudents = students.reduce((obj, student) => {
      const studentDetails = student.split(",");
      const data = obj;
      const groupName = studentDetails[3];
      if (!data[groupName]) data[groupName] = [];
      data[groupName].push(studentDetails[0]);
      return data;
    }, {});

    console.log(`Number of students: ${students.length}`);
    Object.entries(groupedStudents).forEach(([key, value]) => {
      console.log(
        `Number of students in ${key}: ${value.length}. List: ${value
          .join(", ")
          .replace("/n", "")}`
      );
    });
  } catch (err) {
    throw new Error("Cannot load the database");
  }
};

module.exports = countStudents;
