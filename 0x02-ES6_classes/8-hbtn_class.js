export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  get [Symbol.toPrimitive('number')]() {
    return this._size;
  }

  get [Symbol.toPrimitive('string')]() {
    return this._location;
  }
}
