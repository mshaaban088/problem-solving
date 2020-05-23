/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number[][]}
 */
const intervalIntersection = function (A, B) {
  let i = 0;
  let j = 0;
  const intervals = [];

  while (i < A.length && j < B.length) {
    const start = Math.max(A[i][0], B[j][0]);
    const end = Math.min(A[i][1], B[j][1]);

    if (start <= end) {
      intervals.push([start, end]);
    }

    if (A[i][1] > B[j][1]) {
      j++;
    } else {
      i++;
    }
  }

  return intervals;
};

console.log(
  intervalIntersection(
    [
      [0, 2],
      [5, 10],
      [13, 23],
      [24, 25],
    ],
    [
      [1, 5],
      [8, 12],
      [15, 24],
      [25, 26],
    ]
  ).toString() ===
    [
      [1, 2],
      [5, 5],
      [8, 10],
      [15, 23],
      [24, 24],
      [25, 25],
    ].toString()
);

// Test max input
const A = Array(1000);
for (let i = 0; i < A.length; i++) {
  A[i] = [Math.floor(Math.random() * 1e9), Math.floor(Math.random() * 1e9)];
}

const B = Array(1000);
for (let i = 0; i < B.length; i++) {
  B[i] = [Math.floor(Math.random() * 1e9), Math.floor(Math.random() * 1e9)];
}
intervalIntersection(A, B);
