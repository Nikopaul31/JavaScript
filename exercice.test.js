const myFunction = require('./exercice');

test('running test', () => {
  expect(myFunction(true)).toBe("true");
});