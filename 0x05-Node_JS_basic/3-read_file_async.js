const fsPromises = require("fs/promises");

const countStudents = async (path) => {
  try {
    const data = await fsPromises.readFile(path, { encoding: "utf8" });
    const students = data
      .split("\n")
      .slice(1)
      .map((student) => student.replace("\r", ""))
      .filter((student) => student != "");

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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
};

module.exports = countStudents;
