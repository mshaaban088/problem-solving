// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3411/

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome_ascii = function (s) {
  const isAlphaNumeric = (c) => {
    const charCode = c.charCodeAt(0);
    return (
      (charCode > 47 && charCode < 58) |
      (charCode > 64 && charCode < 91) |
      (charCode > 96 && charCode < 123)
    );
  };
  const newS = s
    .split('')
    .map((c) => (isAlphaNumeric(c) ? c.toLowerCase() : ''))
    .join('');

  let low = 0,
    high = newS.length - 1;

  while (low <= high) {
    if (newS[low++] !== newS[high--]) return false;
  }

  return true;
};

/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome_regex = function (s) {
  const newS = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  let low = 0,
    high = newS.length - 1;

  while (low <= high) {
    if (newS[low++] !== newS[high--]) return false;
  }

  return true;
};

const isPalindrome = isPalindrome_regex;

console.log(isPalindrome('A man, a plan, a canal: Panama') === true);
console.log(isPalindrome('race a car') === false);
