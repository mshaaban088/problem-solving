// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3461/

/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
  let lastWordLength = 0,
    i = s.length - 1;

  while (i >= 0 && s[i] === ' ') {
    i--;
  }

  while (i >= 0 && s[i--] !== ' ') {
    lastWordLength++;
  }

  return lastWordLength;
};

console.log(lengthOfLastWord('Hello World') === 5);
console.log(lengthOfLastWord('Hello') === 5);
console.log(lengthOfLastWord(' ') === 0);
console.log(lengthOfLastWord(' s ') === 1);
