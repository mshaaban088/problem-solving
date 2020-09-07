// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3451/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function (pattern, str) {
  const patternsMap = new Map();
  const wordsMap = new Map();
  const words = str.split(' ');

  if (words.length !== pattern.length) return false;

  for (let i = 0; i < pattern.length; i++) {
    patternsMap.set(pattern[i], words[i]);
    wordsMap.set(words[i], pattern[i]);
  }

  for (let i = 0; i < pattern.length; i++) {
    if (patternsMap.get(pattern[i]) !== words[i]) return false;
    if (wordsMap.get(words[i]) !== pattern[i]) return false;
  }

  return true;
};

console.log(wordPattern('abba', 'dog cat cat dog') === true);
console.log(wordPattern('abba', 'dog cat cat fish') === false);
console.log(wordPattern('aaaa', 'dog cat cat dog') === false);
console.log(wordPattern('abba', 'dog dog dog dog') === false);
