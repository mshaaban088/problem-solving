// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3425/

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const eraseOverlapIntervals = function (intervals) {
  const n = intervals.length;

  if (n === 0) return 0;

  intervals.sort((a, b) => a[1] - b[1]);

  let nonOverlappingCount = 1,
    end = intervals[0][1];

  for (const interval of intervals) {
    if (interval[0] >= end) {
      end = interval[1];
      nonOverlappingCount++;
    }
  }

  return n - nonOverlappingCount;
};

console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3],
  ]) === 1
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2],
  ]) === 2
);
console.log(
  eraseOverlapIntervals([
    [1, 2],
    [2, 3],
  ]) === 0
);
