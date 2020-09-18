// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3464/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let minPrice = Number.MAX_VALUE,
    maxProfit = 0;

  for (const price of prices) {
    minPrice = Math.min(minPrice, price);
    maxProfit = Math.max(maxProfit, price - minPrice);
  }

  return maxProfit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
console.log(maxProfit([7, 6, 4, 3, 1]) === 0);
