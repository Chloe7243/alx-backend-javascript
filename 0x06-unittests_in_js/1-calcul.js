function calculateNumber (type, a, b) {
  switch (type) {
    case 'SUM':
      return Math.round(a) + Math.round(b);
    case 'SUBTRACT':
      return Math.round(a) - Math.round(b);
    case 'DIVIDE':
      b = Math.round(b);
      if (b === 0) return 'Error';
      return Math.round(a) / b;
    default:
      break;
  }
}

module.exports = calculateNumber;
