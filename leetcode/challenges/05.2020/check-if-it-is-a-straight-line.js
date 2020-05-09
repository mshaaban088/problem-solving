const slope = ([x1, y1], [x2, y2]) => (y2 - y1) / (x2 - x1);

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
const checkStraightLine = function (coordinates) {
  for (let i = 0; i < coordinates.length - 2; i++) {
    if (slope(coordinates[i], coordinates[i + 1]) !== slope(coordinates[i + 1], coordinates[i + 2])) {
      return false;
    }
  }
  return true;
};

console.log(
  checkStraightLine([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [5, 6],
    [6, 7],
  ]) === true
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ]) === false
);
console.log(
  checkStraightLine([
    [1, 1],
    [2, 2],
    [3, 4],
    [4, 5],
    [5, 6],
    [7, 7],
  ]) === false
);
