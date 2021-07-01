const CountByX = require('./CountByX');

test("CountBy(1,10) should be [1,2,3,4,5,6,7,8,9,10]", () => {
  expect(CountByX(1, 10)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
