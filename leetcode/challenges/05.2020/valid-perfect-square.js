/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  if (num <= 0) return false;
  let sqrt = 1;
  while (sqrt * sqrt < num) sqrt++;
  return sqrt * sqrt === num;
};

console.log(isPerfectSquare(16) === true);
console.log(isPerfectSquare(14) === false);
console.log(isPerfectSquare(4) === true);
console.log(isPerfectSquare(9) === true);
console.log(isPerfectSquare(100) === true);
console.log(isPerfectSquare(23) === false);
console.log(isPerfectSquare(15) === false);
console.log(isPerfectSquare(38) === false);
