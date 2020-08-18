// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3428/

/**
 * @param {number} N
 * @param {number} K
 * @return {number[]}
 */
const numsSameConsecDiff = function (N, K) {
  if (N === 1) return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 1; i < N; i++) {
    const nextQueue = [];

    for (const num of queue) {
      const lastDigit = num % 10;
      const nextDigits = [lastDigit + K];

      if (K != 0) {
        nextDigits.push(lastDigit - K);
      }

      for (const nextDigit of nextDigits) {
        if (nextDigit >= 0 && nextDigit < 10) {
          nextQueue.push(num * 10 + nextDigit);
        }
      }
    }

    queue = nextQueue;
  }

  return queue;
};

console.log(numsSameConsecDiff(3, 7)); // [181, 292, 707, 818, 929]
console.log(numsSameConsecDiff(2, 1)); // [10,12,21,23,32,34,43,45,54,56,65,67,76,78,87,89,98]
