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
      const str = s.substring(i, j);
      if (wordSet.has(str)) {
        memo[j] = true;
      }
    }
  }

  return memo[s.length];
};

console.log(wordBreak('leetcode', ['leet', 'code']) === true);
console.log(wordBreak('applepenapple', ['apple', 'pen']) === true);
console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']) === false);
console.log(wordBreak('cars', ['car', 'ca', 'rs']) === true);
