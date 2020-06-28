// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3373/

/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  if (n < 4) return n;

  const dp = Array(n + 1).fill(Number.MAX_VALUE);
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }

  return dp[n];
};

console.log(numSquares(12) === 3);
console.log(numSquares(13) === 2);
console.log(numSquares(1) === 1);
console.log(numSquares(22) === 3);
