// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3473/

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function (timeSeries, duration) {
  const n = timeSeries.length;

  if (n === 0) return 0;

  let totalDuration = 0;

  for (let i = 0; i < n - 1; i++) {
    totalDuration += Math.min(timeSeries[i + 1] - timeSeries[i], duration);
  }

  return totalDuration + duration;
};

console.log(findPoisonedDuration([1, 4], 2) === 4);
console.log(findPoisonedDuration([1, 2], 2) === 3);
