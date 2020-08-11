// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3419/

/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
  return s
    .split('')
    .map((c) => c.charCodeAt(0) - 'A'.charCodeAt(0) + 1)
    .reduce((acc, digit, i) => acc + digit * Math.pow(26, s.length - i - 1), 0);
};

console.log(titleToNumber('A') === 1);
console.log(titleToNumber('AB') === 28);
console.log(titleToNumber('ZY') === 701);
