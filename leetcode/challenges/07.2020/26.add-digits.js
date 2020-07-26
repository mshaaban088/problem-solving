// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3402/
// Hint: Digital Root https://brilliant.org/wiki/digital-root/

/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
  if (num === 0) return 0;
  if (num % 9 === 0) return 9;
  return num % 9;
};

console.log(addDigits(38) === 2);
