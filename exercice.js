function isPalindrome(x) {
  const arr = Array.from(x.toLowerCase());
  const reversedArr = [...arr].reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == reversedArr[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
  
module.exports = isPalindrome;

/* BEST SOLUTION */
const isPalindromeBest = (x) => {
  return x.split("").reverse().join("").toLowerCase() === x.toLowerCase() ? true : false
}