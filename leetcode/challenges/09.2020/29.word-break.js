// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/558/week-5-september-29th-september-30th/3477/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
  const wordSet = new Set(wordDict);
  const memo = Array(s.length + 1).fill(false);
  memo[0] = true;

  for (let i = 0; i < s.length; i++) {
    if (!memo[i]) continue;

    for (let j = i + 1; j <= s.length; j++) {
      const word = s.substring(i, j);
      if (wordSet.has(word)) {
        memo[j] = true;
      }
    }
  }

  return memo[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code']) === true);
console.log(wordBreak('applepenapple', ['apple', 'pen']) === true);
console.log(
  wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']) === false
);
