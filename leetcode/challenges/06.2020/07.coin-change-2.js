// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3353/

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change_memo = function (amount, coins) {
  const memo = new Map();
  function changeHelper(amount, coins) {
    if (amount === 0) {
      return 1;
    }
    if (amount < 0 || coins.length === 0) {
      return 0;
    }

    const key = `${coins.length}|${amount}`;

    if (!memo.has(key)) {
      const include = changeHelper(amount - coins[0], coins);
      const exclude = changeHelper(amount, coins.slice(1));
      memo.set(key, include + exclude);
    }
    return memo.get(key);
  }
  return changeHelper(amount, coins);
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change = function (amount, coins) {
  const dp = Array(amount + 1).fill(0);
  dp[0] = 1;

  for (const coin of coins) {
    for (let i = coin; i < amount + 1; i++) {
      dp[i] += dp[i - coin];
    }
  }

  return dp[amount];
};

/*
5=5
5=2+2+1
5=2+1+1+1
5=1+1+1+1+1
*/
console.log(change(5, [1, 2, 5]) === 4);
console.log(change(3, [2]) === 0);
console.log(change(10, [10]) === 1);

// Check TLE
const coins = Array(500);
for (let i = 0; i < coins.length; i++) {
  coins[i] = Math.floor(Math.random() * 5000);
}
console.log(change(5000, coins));
