/**
 * @param {number[][]} matrix
 * @return {number}
 */
const countSquares = function (matrix) {
  let count = 0;
  const modifiedMatrix = Array(matrix.length + 1);
  for (let i = 0; i < modifiedMatrix.length; i++) {
    modifiedMatrix[i] = Array(matrix[0].length + 1).fill(0);
  }

  for (let i = 1; i < modifiedMatrix.length; i++) {
    for (let j = 1; j < modifiedMatrix[i].length; j++) {
      if (matrix[i - 1][j - 1] === 1) {
        modifiedMatrix[i][j] =
          Math.min(modifiedMatrix[i - 1][j], modifiedMatrix[i][j - 1], modifiedMatrix[i - 1][j - 1]) + 1;

        count += modifiedMatrix[i][j];
      }
    }
  }
  return count;
};

console.log(
  countSquares([
    [0, 1, 1, 1],
    [1, 1, 1, 1],
    [0, 1, 1, 1],
  ]) === 15
);

console.log(
  countSquares([
    [1, 0, 1],
    [1, 1, 0],
    [1, 1, 0],
  ]) === 7
);

// Testing time limit with max input size
const matrix = Array(300);

for (let i = 0; i < 300; i++) {
  matrix[i] = Array(300);
  for (let j = 0; j < 300; j++) {
    matrix[i][j] = Math.random() >= 0.5 ? 1 : 0;
  }
}

countSquares(matrix);
