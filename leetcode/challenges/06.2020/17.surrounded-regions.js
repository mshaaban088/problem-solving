// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3363/

/**
  1. Replace any connected 'O' starting from borders by '*'
  2. Replace any connected 'O' starting from any position other than borders by 'X'
  3. Replace all cells with '*' by 'X'
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
  if (!board.length || !board[0].length) {
    return;
  }

  function floodFill(x, y) {
    if (x < 0 || x >= board.length || y < 0 || y >= board[x].length || board[x][y] !== 'O') return;

    board[x][y] = '*';

    floodFill(x - 1, y);
    floodFill(x + 1, y);
    floodFill(x, y - 1);
    floodFill(x, y + 1);
  }

  const rows = board.length;
  const cols = board[0].length;

  // Check vertical borders (first and last columns)
  for (let i = 0; i < rows; i++) {
    floodFill(i, 0);
    floodFill(i, cols - 1);
  }

  // Check horizontal borders (first and last rows)
  for (let j = 0; j < cols; j++) {
    floodFill(0, j);
    floodFill(rows - 1, j);
  }

  for (let i = 0; i < rows; ++i) {
    for (let j = 0; j < cols; ++j) {
      if (board[i][j] == 'O') {
        board[i][j] = 'X';
      } else if (board[i][j] === '*') {
        board[i][j] = 'O';
      }
    }
  }
};

/*
Input:
X X X X
X O O X
X X O X
X O X X

Output:
X X X X
X X X X
X X X X
X O X X

*/

let board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'O', 'X', 'X'],
];

solve(board);

console.log(board);

/*
Input:
X X X X
X O O X
X X O X
X X O X

Output:
X X X X
X O O X
X X O X
X X O X

*/
board = [
  ['X', 'X', 'X', 'X'],
  ['X', 'O', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
  ['X', 'X', 'O', 'X'],
];

solve(board);

console.log(board);
