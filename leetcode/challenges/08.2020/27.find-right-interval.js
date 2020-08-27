// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3438/

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval_bruteforce = function (intervals) {
  const out = Array(intervals.length).fill(-1);

  for (let i = 0; i < intervals.length; i++) {
    const interval_i = intervals[i];
    for (let j = 0; j < intervals.length; j++) {
      if (i === j) continue;
      const interval_j = intervals[j];
      if (interval_j[0] >= interval_i[1]) {
        if (out[i] === -1 || interval_j[0] < intervals[out[i]][0]) {
          out[i] = j;
        }
      }
    }
  }
  return out;
};

/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
const findRightInterval_binarySearch = function (intervals) {
  function binarySearch(arr, n) {
    let left = 0,
      right = arr.length;

    while (left < right) {
      const mid = (left + right) >> 1;
      if (arr[mid][0] >= n) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  }

  const startsOnly = intervals
    .map((interval, index) => [interval[0], index])
    .sort((a, b) => a[0] - b[0]);

  return intervals.map((interval) => {
    const index = binarySearch(startsOnly, interval[1]);
    return index === intervals.length ? -1 : startsOnly[index][1];
  });
};

const findRightInterval = findRightInterval_binarySearch;

console.log(findRightInterval([[1, 2]]).toString() === [-1].toString());
console.log(
  findRightInterval([
    [3, 4],
    [2, 3],
    [1, 2],
  ]).toString() === [-1, 0, 1].toString()
);
console.log(
  findRightInterval([
    [1, 4],
    [2, 3],
    [3, 4],
  ]).toString() === [-1, 2, -1].toString()
);
