// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3466/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const uniquePathsIII = function (grid) {
  const n = grid.length,
    m = grid[0].length,
    visited = Array(n);

  let nZeros = 0,
    startI,
    startJ,
    nPaths = 0;

  for (let i = 0; i < n; i++) {
    visited[i] = Array(m).fill(false);
    for (let j = 0; j < m; j++) {
      nZeros += !grid[i][j];

      if (grid[i][j] === 1) {
        startI = i;
        startJ = j;
      }
    }
  }

  function floodFill(i, j, zeros = 0) {
    if (
      i < 0 ||
      i >= n ||
      j < 0 ||
      j >= m ||
      grid[i][j] === -1 ||
      visited[i][j]
    ) {
      return;
    }

    if (grid[i][j] === 2 && zeros === nZeros) {
      nPaths++;
      return;
    }

    zeros += !grid[i][j];
    visited[i][j] = true;

    floodFill(i - 1, j, zeros);
    floodFill(i + 1, j, zeros);
    floodFill(i, j - 1, zeros);
    floodFill(i, j + 1, zeros);

    visited[i][j] = false;
  }

  floodFill(startI, startJ, 0);

  return nPaths;
};

console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 2, -1],
  ]) === 2
);
console.log(
  uniquePathsIII([
    [1, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 2],
  ]) === 4
);
console.log(
  uniquePathsIII([
    [0, 1],
    [2, 0],
  ]) === 0
);
