// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3426/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  if (prices.length === 0) return 0;

  let buy1 = -prices[0],
    sell1 = Number.NEGATIVE_INFINITY,
    buy2 = Number.NEGATIVE_INFINITY,
    sell2 = Number.NEGATIVE_INFINITY;

  for (let i = 1; i < prices.length; i++) {
    buy1 = Math.max(buy1, -prices[i]);
    sell1 = Math.max(sell1, buy1 + prices[i]);
    buy2 = Math.max(buy2, sell1 - prices[i]);
    sell2 = Math.max(sell2, buy2 + prices[i]);
  }

  return Math.max(sell2, 0);
};

console.log(maxProfit([3, 3, 5, 0, 0, 3, 1, 4]) === 6);
console.log(maxProfit([1, 2, 3, 4, 5]) === 4);
console.log(maxProfit([7, 6, 4, 3, 1]) === 0);
console.log(maxProfit([2, 1, 4, 5, 2, 9, 7]) === 11);
