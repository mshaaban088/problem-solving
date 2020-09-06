// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3450/

/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
const largestOverlap = function (A, B) {
  const n = A.length;

  function sumOverlap(grid1, grid2, rowShifted, colShifted) {
    let sum = 0;
    for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
        if (
          row + rowShifted < 0 ||
          row + rowShifted >= n ||
          col + colShifted < 0 ||
          col + colShifted >= n ||
          !(grid1[row + rowShifted][col + colShifted] & grid2[row][col])
        )
          continue;
        sum++;
      }
    }
    return sum;
  }

  let maxOverlap = 0;

  for (let row = -n + 1; row < n; row++) {
    for (let col = -n + 1; col < n; col++) {
      maxOverlap = Math.max(maxOverlap, sumOverlap(A, B, row, col));
    }
  }

  return maxOverlap;
};

console.log(
  largestOverlap(
    [
      [1, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
    ],
    [
      [0, 0, 0],
      [0, 1, 1],
      [0, 0, 1],
    ]
  ) === 3
);
