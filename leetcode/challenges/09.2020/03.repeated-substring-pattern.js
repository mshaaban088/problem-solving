// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3447/

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern_iterative = function (s) {
  const n = s.length;
  for (let i = 1; i <= n / 2; i++) {
    const sub = s.substr(0, i);
    const appendTimes = Math.floor(n / i);
    if (i * appendTimes !== n) continue;
    if (''.padStart(n, sub) === s) return true;
  }
  return false;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern_oneline = function (s) {
  return s.repeat(2).slice(1, -1).includes(s);
};

const repeatedSubstringPattern = repeatedSubstringPattern_oneline;

console.log(repeatedSubstringPattern('abab') === true);
console.log(repeatedSubstringPattern('aba') === false);
console.log(repeatedSubstringPattern('abcabcabcabc') === true);
