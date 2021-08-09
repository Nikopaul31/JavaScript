function makeNegative(num) {
  const result = num < 0 ? num : -num;
  return result;
}

/* BEST SOLUTION */
function makeNegativeBest(num) {
  return -Math.abs(num);
}

module.exports = makeNegative;