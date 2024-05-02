const chai = require('chai');
const { it, describe } = require("mocha");
const calculateNumber = require('./2-calcul_chai.js');

const { expect } = chai;

describe('calculateNumber', () => {
  it('should return 6', () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });
  it('should return -4', () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });
  it('should return 0.2', () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
  });
  it('should return Error', () => {
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
