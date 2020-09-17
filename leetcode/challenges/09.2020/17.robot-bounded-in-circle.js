// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3463/

/**
 * @param {string} instructions
 * @return {boolean}
 */
const isRobotBounded = function (instructions) {
  const directions = {
    N: { L: 'W', R: 'E' },
    E: { L: 'N', R: 'S' },
    S: { L: 'E', R: 'W' },
    W: { L: 'S', R: 'N' },
  };

  function rotate(direction, rightOrLeft) {
    return directions[direction][rightOrLeft];
  }

  function move(x, y, direction) {
    if (direction === 'N') return [x, y + 1];
    if (direction === 'E') return [x + 1, y];
    if (direction === 'S') return [x, y - 1];
    if (direction === 'W') return [x - 1, y];
  }

  let x = 0,
    y = 0,
    direction = 'N';

  for (const ins of instructions) {
    if (ins !== 'G') {
      direction = rotate(direction, ins);
    } else {
      [x, y] = move(x, y, direction);
    }
  }

  return (x === 0 && y === 0) || direction !== 'N';
};

console.log(isRobotBounded('GGLLGG') === true);
console.log(isRobotBounded('GGLLGGLL') === true);
console.log(isRobotBounded('GG') === false);
console.log(isRobotBounded('GL') === true);
