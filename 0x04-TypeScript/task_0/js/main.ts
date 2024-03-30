interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  age: 17,
  firstName: "Harry",
  lastName: "Potter",
  location: "Florida",
};

const student2: Student = {
  age: 16,
  firstName: "Jill",
  lastName: "Potter",
  location: "Florida",
};

const studentsList: Student[] = [student1, student2];

const styleSheet = `
  html {
    margin: 0;
    height: 100%;
  }
  body {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80%;
    margin: 10%;
  }
  table {
    border-collapse: collapse;
  }
  thead {
    font-weight: bold;
  }
  td {
    padding: 10px;
    border: 1px solid gray;
    cursor: pointer;
  }
  td:hover {
    background: gainsboro;
  }

  td:nth-child(1) {
    text-align: center;
  }
`;

export const displayStudents = (students: Student[]): void => {
  const table = document.createElement("table");
  const tableHead = document.createElement("thead");
  const headRow = document.createElement("tr");
  const tableBody = document.createElement("tbody");
  headRow.insertAdjacentHTML("beforeend", "<td>FirstName</td");
  headRow.insertAdjacentHTML("beforeend", "<td>Location</td");
  tableHead.insertAdjacentElement("beforeend", headRow);

  students?.forEach((student) => {
    const { firstName, location } = student;
    const bodyRow = document.createElement("tr");
    bodyRow.insertAdjacentHTML("beforeend", `<td>${firstName}</td>`);
    bodyRow.insertAdjacentHTML("beforeend", `<td>${location}</td>`);
    tableBody.insertAdjacentElement("beforeend", bodyRow);
  });


  table.insertAdjacentElement("beforeend", tableHead);
  table.insertAdjacentElement("beforeend", tableBody);
  document.body.insertAdjacentElement("beforeend", table);
};

displayStudents(studentsList);
const styleSheetElement = document.createElement("style");
styleSheetElement.innerHTML = styleSheet;
document.head.insertAdjacentElement("beforeend", styleSheetElement);
document.title = "Task 0";