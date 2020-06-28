// Problem: https://leetcode.com/contest/biweekly-contest-28/problems/find-two-non-overlapping-sub-arrays-each-with-target-sum/

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const minSumOfLengths = function (arr, target) {
  function findSmallestSubArr(arr, target) {
    let currentSum = 0,
      n = arr.length,
      minLength = Number.MAX_VALUE,
      minStart = -1,
      minEnd = -1,
      start = 0,
      end = 0;

    while (end < n) {
      while (currentSum < target && end < n) {
        currentSum += arr[end++];
      }

      while (currentSum >= target && start < n) {
        if (currentSum === target && end - start < minLength) {
          minLength = end - start;
          minStart = start;
          minEnd = end;
        }

        currentSum -= arr[start++];
      }
    }

    return { start: minStart, end: minEnd, length: minLength };
  }

  const { start, end, length } = findSmallestSubArr(arr, target);

  if (start < 0) {
    return -1;
  }

  const { length: leftLength } = findSmallestSubArr(arr.slice(0, start), target);
  const { length: rightLength } = findSmallestSubArr(arr.slice(end), target);

  const minSum = Math.min(leftLength, rightLength);

  return minSum <= arr.length ? length + minSum : -1;
};

console.log(minSumOfLengths([2, 2, 1, 3, 2, 2, 4, 3], 3) === 2);
console.log(minSumOfLengths([3, 2, 2, 4, 3], 3) === 2);
console.log(minSumOfLengths([7, 3, 4, 7], 7) === 2);
console.log(minSumOfLengths([4, 3, 2, 6, 2, 3, 4], 6) === -1);
console.log(minSumOfLengths([5, 5, 4, 4, 5], 3) === -1);
console.log(minSumOfLengths([3, 1, 1, 1, 5, 1, 2, 1], 3) === 3);
console.log(minSumOfLengths([1, 2, 2, 3, 2, 6, 7, 2, 1, 4, 8], 5) === 4);
