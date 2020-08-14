// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3423/

/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  const freqSet = new Set();
  let longestPalindromeLength = 0;

  for (const c of s) {
    if (freqSet.has(c)) {
      freqSet.delete(c);
      longestPalindromeLength += 2;
    } else {
      freqSet.add(c);
    }
  }

  return freqSet.size > 0
    ? longestPalindromeLength + 1
    : longestPalindromeLength;
};

console.log(longestPalindrome('abccccdd') === 7);
