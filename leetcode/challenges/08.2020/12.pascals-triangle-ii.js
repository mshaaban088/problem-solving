// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3421/

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow_wholeTriangle = function (rowIndex) {
  const rowCount = rowIndex + 1,
    rows = Array(rowCount);

  for (let i = 0; i < rowCount; i++) {
    const colCount = i + 1;
    rows[i] = Array(colCount).fill(0);
    rows[i][0] = 1;
    rows[i][colCount - 1] = 1;

    if (i < 2) continue;

    for (let j = 1; j < colCount - 1; j++) {
      rows[i][j] = rows[i - 1][j] + rows[i - 1][j - 1];
    }
  }

  return rows[rowIndex];
};

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
const getRow_constantSpace = function (rowIndex) {
  const finalRow = [1];

  for (let col = 1; col <= rowIndex; col++) {
    finalRow.push((finalRow[finalRow.length - 1] * (rowIndex - col + 1)) / col);
  }

  return finalRow;
};

const getRow = getRow_constantSpace;

console.log(getRow(3).toString() === [1, 3, 3, 1].toString());
console.log(getRow(4).toString() === [1, 4, 6, 4, 1].toString());
console.log(getRow(5).toString() === [1, 5, 10, 10, 5, 1].toString());
getRow(6);
