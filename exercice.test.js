const myFunction = require('./exercice');

test('running test', () => {
  expect(myFunction(1, 2)).toBe(3);
});