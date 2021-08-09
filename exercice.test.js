const myFunction = require('./exercice');

test('-1 should return -1', () => {
  expect(myFunction(-1)).toBe(-1);
});

test('1 should return -1', () => {
  expect(myFunction(1)).toBe(-1);
});