/**
 * @param {character[][]} grid
 * @return {number}
 */

const di = [-1, +1, 0, 0];
const dj = [0, 0, -1, +1];

const isValidMove = function (grid, visited, i, j) {
  if (i < 0 || i >= grid.length) return false;
  if (j < 0 || j >= grid[i].length) return false;
  if (grid[i][j] == '0') return false;
  if (visited[i][j]) return false;
  return true;
};

const emptyGrid = function (n, m) {
  const grid = Array(n);

  for (let i = 0; i < n; ++i) {
    grid[i] = Array(m).fill(0);
  }

  return grid;
};

const floodFill = function (grid, visited, i, j) {
  visited[i][j] = 1;

  for (let k = 0; k < di.length; ++k) {
    const newI = i + di[k];
    const newJ = j + dj[k];

    if (isValidMove(grid, visited, newI, newJ)) {
      floodFill(grid, visited, newI, newJ);
    }
  }
};

const numIslands = function (grid) {
  if (!grid.length || !grid[0].length) {
    return 0;
  }

  const visited = emptyGrid(grid.length, grid[0].length);
  let nIslands = 0;

  for (let i = 0; i < grid.length; ++i) {
    for (let j = 0; j < grid[i].length; ++j) {
      if (grid[i][j] == 1 && !visited[i][j]) {
        floodFill(grid, visited, i, j);
        nIslands++;
      }
    }
  }

  return nIslands;
};

console.log(
  numIslands([
    ['0', '1', '0'],
    ['1', '0', '1'],
    ['0', '1', '0'],
  ])
);
