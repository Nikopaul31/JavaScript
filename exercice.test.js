const getAverage = require('./exercice');

test('[1,2,3,4] should equal 2', () => {
  expect(getAverage([1,2,3,4])).toBe(2);
});

test('[15,15,15] should equal 15', () => {
    expect(getAverage([15,15,15])).toBe(15);
  });