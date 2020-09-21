// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3467/

/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
const carPooling = function (trips, capacity) {
  const timeline = Array(1001).fill(0);

  for (const trip of trips) {
    timeline[trip[1]] += trip[0];
    timeline[trip[2]] -= trip[0];
  }

  let requiredCapacity = 0;

  for (const capacityAtPointInTime of timeline) {
    requiredCapacity += capacityAtPointInTime;

    if (requiredCapacity > capacity) {
      return false;
    }
  }

  return true;
};

console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    4
  ) === false
);
console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 3, 7],
    ],
    5
  ) === true
);
console.log(
  carPooling(
    [
      [2, 1, 5],
      [3, 5, 7],
    ],
    3
  ) === true
);
console.log(
  carPooling(
    [
      [3, 2, 7],
      [3, 7, 9],
      [8, 3, 9],
    ],
    11
  ) === true
);
