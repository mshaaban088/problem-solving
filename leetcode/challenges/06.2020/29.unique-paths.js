// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/543/week-5-june-29th-june-30th/3375/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
  const dp = Array(m);

  for (let i = 0; i < m; i++) {
    dp[i] = Array(n).fill(0);
    dp[i][0] = 1;
  }

  for (let i = 0; i < n; i++) {
    dp[0][i] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};

console.log(uniquePaths(3, 2) === 3);
console.log(uniquePaths(7, 3) === 28);
console.log(uniquePaths(8, 4) === 120);
console.log(uniquePaths(8, 5) === 330);
