// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3377/

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins_loop = function (n) {
  for (let i = 1, rest = n; i <= n; i++) {
    rest -= i;
    if (rest === 0) return i;
    if (rest < 0) return i - 1;
  }

  return 0;
};

/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins_binarySearch = function (n) {
  if (n < 2) return n;

  let low = 1,
    high = n;

  while (low < high) {
    const mid = Math.floor((low + high) / 2);
    const sum = (mid * (mid + 1)) / 2;
    if (sum > n) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low - 1;
};

const arrangeCoins = arrangeCoins_binarySearch;

console.log(arrangeCoins(0) === 0);
console.log(arrangeCoins(1) === 1);
console.log(arrangeCoins(2) === 1);
console.log(arrangeCoins(3) === 2);
console.log(arrangeCoins(4) === 2);
console.log(arrangeCoins(5) === 2);
console.log(arrangeCoins(6) === 3);
console.log(arrangeCoins(8) === 3);
console.log(arrangeCoins(2147483647) === 65535);
