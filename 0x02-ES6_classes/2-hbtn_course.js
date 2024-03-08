export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    } else if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else {
      this._name = name;
      this._length = length;
      this._students = students;
    }
  }

  get name() {
    return this._name;
  }

  set name(name) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    } else this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    if (typeof length !== 'number') {
      throw new TypeError('Length must be a number');
    } else this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    if (!(students instanceof Array)) {
      throw new TypeError('Students must be an array of strings');
    } else if (!students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    } else this.students = students;
  }
}
