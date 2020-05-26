/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const maxUncrossedLines = function (A, B) {
  const modifiedMatrix = Array(A.length + 1);
  for (let i = 0; i < modifiedMatrix.length; i++) {
    modifiedMatrix[i] = Array(B.length + 1).fill(0);
  }

  for (let i = 1; i < modifiedMatrix.length; i++) {
    for (let j = 1; j < modifiedMatrix[i].length; j++) {
      if (A[i - 1] === B[j - 1]) {
        modifiedMatrix[i][j] = modifiedMatrix[i - 1][j - 1] + 1;
      } else {
        modifiedMatrix[i][j] = Math.max(modifiedMatrix[i][j - 1], modifiedMatrix[i - 1][j]);
      }
    }
  }

  return modifiedMatrix[A.length][B.length];
};

console.log(maxUncrossedLines([1, 4, 2], [1, 2, 4]) === 2);
console.log(maxUncrossedLines([2, 5, 1, 2, 5], [10, 5, 2, 1, 5, 2]) === 3);
console.log(maxUncrossedLines([1, 3, 7, 1, 7, 5], [1, 9, 2, 5, 1]) === 2);
