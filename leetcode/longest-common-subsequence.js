// Problem: https://leetcode.com/problems/longest-common-subsequence/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
const longestCommonSubsequence = function (text1, text2) {
  const n = text1.length + 1,
    m = text2.length + 1;
  const dp = Array(n);
  for (let i = 0; i < n; i++) {
    dp[i] = Array(m).fill(0);
  }

  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[n - 1][m - 1];
};

console.log(longestCommonSubsequence('abcde', 'ace') === 3);
console.log(longestCommonSubsequence('abc', 'abc') === 3);
console.log(longestCommonSubsequence('abc', 'def') === 0);
