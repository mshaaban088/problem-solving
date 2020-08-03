// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3409/

/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  const VALID_CAPITAL = /^([A-Z]+|[A-Z]?[a-z]+)$/;
  return VALID_CAPITAL.test(word);
};

console.log(detectCapitalUse('USA') === true);
console.log(detectCapitalUse('Google') === true);
console.log(detectCapitalUse('leetcode') === true);
console.log(detectCapitalUse('usA') === false);
console.log(detectCapitalUse('gooGle') === false);
