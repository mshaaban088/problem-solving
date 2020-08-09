// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3418/

const EMPTY_CELL = 0;
const FRESH_ORANGE = 1;
const ROTTEN_ORANGE = 2;

/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = function (grid) {
  function isFreshOrange(i, j) {
    return grid[i] && grid[i][j] === FRESH_ORANGE;
  }

  const N = grid.length,
    M = grid[0].length;

  let queue = [],
    nextIterationQeueu = [],
    nMinutes = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === ROTTEN_ORANGE) {
        queue.push({ i, j });
      }
    }
  }

  while (queue.length) {
    const { i, j } = queue.shift();

    if (isFreshOrange(i - 1, j)) {
      grid[i - 1][j] = ROTTEN_ORANGE;
      nextIterationQeueu.push({ i: i - 1, j });
    }
    if (isFreshOrange(i + 1, j)) {
      grid[i + 1][j] = ROTTEN_ORANGE;
      nextIterationQeueu.push({ i: i + 1, j });
    }
    if (isFreshOrange(i, j - 1)) {
      grid[i][j - 1] = ROTTEN_ORANGE;
      nextIterationQeueu.push({ i, j: j - 1 });
    }
    if (isFreshOrange(i, j + 1)) {
      grid[i][j + 1] = ROTTEN_ORANGE;
      nextIterationQeueu.push({ i, j: j + 1 });
    }

    if (queue.length === 0) {
      if (nextIterationQeueu.length > 0) {
        nMinutes++;
      }
      queue = nextIterationQeueu;
      nextIterationQeueu = [];
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (grid[i][j] === FRESH_ORANGE) {
        return -1;
      }
    }
  }

  return nMinutes;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ]) === 4
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ]) === -1
);

console.log(orangesRotting([[0, 2]]) === 0);
console.log(orangesRotting([[0, 2, 2]]) === 0);
console.log(orangesRotting([[1, 2, 1, 1, 2, 1, 1]]) === 2);
