// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/548/week-5-july-29th-july-31st/3406/

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
const wordBreak = function (s, wordDict) {
  const wordsSet = new Set(wordDict);
  const memo = {};

  function wordBreakHelper(substr) {
    if (substr in memo) return memo[substr];
    const result = [];

    if (wordsSet.has(substr)) {
      result.push(substr);
    }

    for (let i = 1; i < substr.length; i++) {
      const left = substr.substring(0, i);
      if (wordsSet.has(left)) {
        const right = substr.substring(i);
        for (const rightWordBreak of wordBreakHelper(right)) {
          result.push(`${left} ${rightWordBreak}`);
        }
      }
    }

    memo[substr] = result;
    return result;
  }

  return wordBreakHelper(s);
};

/*
[
  "cats and dog",
  "cat sand dog"
]
*/
console.log(wordBreak('catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']));

/*
[
  "pine apple pen apple",
  "pineapple pen apple",
  "pine applepen apple"
]
*/
console.log(
  wordBreak('pineapplepenapple', [
    'apple',
    'pen',
    'applepen',
    'pine',
    'pineapple',
  ])
);

/*
[]
*/

console.log(wordBreak('catsandog', ['cats', 'dog', 'sand', 'and', 'cat']));
