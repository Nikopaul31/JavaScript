const myFunction = require('./exercice');

test('running test', () => {
  expect(myFunction("F")).toBe(15);
});