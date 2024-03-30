namespace Subjects {
  export interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React extends Subject {
    getRequirements() {
      return "Here is the list of requirements for React";
    }
    getAvailableTeacher() {
      return this.teacher.experienceTeachingReact
        ? `Available Teacher: ${this.teacher.firstName}`
        : "No available teacher";
    }
  }
}
