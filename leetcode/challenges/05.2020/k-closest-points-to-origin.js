/**
 * @param {number[][]} points
 * @param {number} K
 * @return {number[][]}
 */
const kClosest = function (points, K) {
  return points
    .map((point) => ({ point, distance: Math.sqrt(point[0] ** 2 + point[1] ** 2) }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, K)
    .map(({ point }) => point);
};

/*
[
  [-2,2]
]
*/
console.log(
  kClosest(
    [
      [1, 3],
      [-2, 2],
    ],
    1
  )
);

/*
[
  [3,3],
  [-2,4]
]
*/
console.log(
  kClosest(
    [
      [3, 3],
      [5, -1],
      [-2, 4],
    ],
    2
  )
);
