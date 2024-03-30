export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome() {
    return "Working from home";
  }

  getCoffeeBreak() {
    return "Getting a coffee break";
  }

  workDirectorTasks() {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome() {
    return "Cannot work from home";
  }

  getCoffeeBreak() {
    return "Cannot get coffee break";
  }

  workTeacherTasks() {
    return "Getting to work";
  }
}

export const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === "number" && Number(salary) < 500) {
    return new Teacher();
  }

  return new Director();
};

export const isDirector = (employee: Director | Teacher): boolean => {
  return employee instanceof Director;
};

export const executeWork = (employee: Director | Teacher) => {
  if (isDirector(employee)) {
    return (employee as Director).workDirectorTasks();
  } else {
    (employee as Teacher).workTeacherTasks();
  }
};

export type Subjects = "Math" | "History";

export const teachClass = (todayClass: Subjects) => {
  if (todayClass === "Math") {
    return "Teaching Math";
  }
  if (todayClass === "History") {
    return "Teaching History";
  }
};
