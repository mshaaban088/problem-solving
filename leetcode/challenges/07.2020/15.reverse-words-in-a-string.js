// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3391/

/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(' ');
};

console.log(reverseWords('the sky is blue') === 'blue is sky the');
console.log(reverseWords('  hello world!  ') === 'world! hello');
console.log(reverseWords('a good   example') === 'example good a');
