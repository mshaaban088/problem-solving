// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/548/week-5-july-29th-july-31st/3405/

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  const buyMemo = Array(prices.length);
  const sellMemo = Array(prices.length);

  function buy(index) {
    if (index >= prices.length) return 0;
    if (!buyMemo[index]) {
      buyMemo[index] = Math.max(
        -prices[index] + sell(index + 1),
        buy(index + 1)
      );
    }
    return buyMemo[index];
  }

  function sell(index) {
    if (index >= prices.length) return 0;
    if (!sellMemo[index]) {
      sellMemo[index] = Math.max(
        prices[index] + buy(index + 2),
        sell(index + 1)
      );
    }
    return sellMemo[index];
  }

  return buy(0);
};

console.log(maxProfit([1, 2, 3, 0, 2]) === 3);
