export const readDatabase = (file) =>
  new Promise((resolve, reject) => {
    fs.readFile(file, "utf-8", (err, data) => {
      if (err) {
        reject(new Error("Cannot load the database"));
      } else {
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
        resolve(groupedStudents);
      }
    });
  });
