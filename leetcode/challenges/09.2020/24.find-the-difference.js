// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3471/

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference_count = function (s, t) {
  const counts = Array(26).fill(0);
  const aCharCode = 'a'.charCodeAt(0);

  for (let i = 0; i < s.length; i++) {
    counts[s.charCodeAt(i) - aCharCode]++;
  }

  for (let i = 0; i < t.length; i++) {
    counts[t.charCodeAt(i) - aCharCode]--;
  }

  for (let i = 0; i < counts.length; i++) {
    if (counts[i] < 0) {
      return String.fromCharCode(i + aCharCode);
    }
  }
  return null;
};

/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
const findTheDifference_bitwise = function (s, t) {
  let diff = 0;

  for (let i = 0; i < s.length; i++) {
    diff ^= s.charCodeAt(i);
    diff ^= t.charCodeAt(i);
  }

  diff ^= t.charCodeAt(t.length - 1);

  return String.fromCharCode(diff);
};

const findTheDifference = findTheDifference_bitwise;

console.log(findTheDifference('abcd', 'abcde') === 'e');
