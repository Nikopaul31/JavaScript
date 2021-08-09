const myFunction = require('./exercice');

test('expect Kaya to be false', () => {
  expect(myFunction("Kaya")).toBe(false);
});

test('expect Kayak to be true', () => {
  expect(myFunction("Kayak")).toBe(true);
});