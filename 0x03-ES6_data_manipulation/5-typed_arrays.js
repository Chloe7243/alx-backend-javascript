export default function createInt8TypedArray(length, positon, value) {
  if (positon > length) throw new Error('Position outside range');
  else {
    const buffer = new ArrayBuffer(length);
    const view = new Int8Array(buffer);
    view[positon] = value;
    return buffer;
  }
}
