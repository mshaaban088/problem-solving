// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3383/

/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  if (!grid.length || !grid[0].length) return 0;

  const N = grid.length,
    M = grid[0].length,
    visited = Array(N);

  for (let i = 0; i < N; i++) {
    visited[i] = Array(M).fill(false);
  }

  let perimeter = 0;

  function dfs(i, j) {
    // Touches boundaries or water, then +1
    if (i < 0 || i >= N || j < 0 || j >= M || grid[i][j] === 0) {
      perimeter++;
      return;
    }

    if (visited[i][j]) {
      return;
    }

    visited[i][j] = true;

    dfs(i - 1, j);
    dfs(i + 1, j);
    dfs(i, j - 1);
    dfs(i, j + 1);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === 1) {
        dfs(i, j);
      }
    }
  }

  return perimeter;
};

console.log(
  islandPerimeter([
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [0, 1, 0, 0],
    [1, 1, 0, 0],
  ]) === 16
);

console.log(islandPerimeter([[1, 0]]) === 4);
