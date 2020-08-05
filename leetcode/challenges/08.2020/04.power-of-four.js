// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3412/

/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour_loop = function (num) {
  let n = 1;
  while (n > 0 && n < num) {
    n <<= 2;
  }
  return n === num;
};

/**
 * @param {number} num
 * @return {boolean}
 */
const isPowerOfFour_log = function (num) {
  return (Math.log(num) / Math.log(4)) % 1 === 0;
};

const isPowerOfFour = isPowerOfFour_log;

console.log(isPowerOfFour(16) === true);
console.log(isPowerOfFour(1) === true);
console.log(isPowerOfFour(5) === false);
console.log(isPowerOfFour(2) === false);
console.log(isPowerOfFour(8) === false);
console.log(isPowerOfFour(1162261466) === false);
console.log(isPowerOfFour(-2147483648) === false);
