// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/548/week-5-july-29th-july-31st/3407/

/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  const dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};

console.log(climbStairs(0) === 1);
console.log(climbStairs(1) === 1);
console.log(climbStairs(2) === 2);
console.log(climbStairs(3) === 3);
