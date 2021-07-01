/* 
Create a function with two arguments that will return an array of the first (n) multiples of (x).

Assume both the given number and the number of times to count will be positive numbers greater than 0.

Return the results as an array (or list in Python, Haskell or Elixir).

Examples: 
countBy(1,10) === [1,2,3,4,5,6,7,8,9,10]
countBy(2,5) === [2,4,6,8,10]
 */

function CountByX(x, n) {
  var z = Array.from(new Array(n), (v, i) => (i + 1) * x);
  return z;
}

module.exports = CountByX;

/* Alternatives */

function countBy2(x, n) {
  var z = [];
  for (i = 1; i <= n; i++) {
    z.push(x * i);
  }
  return z;
}

function countBy3(x, n) {
  return Array.apply(0, Array(n)).map(function (v, i) {
    return (i + 1) * x;
  });
}
