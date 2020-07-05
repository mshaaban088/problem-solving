// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3381/

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance_binaryLoop = function (x, y) {
  let xStr = x.toString(2).padStart(32, '0'),
    yStr = y.toString(2).padStart(32, '0'),
    distance = 0;

  for (let i = 0; i < 32; i++) {
    if (xStr[i] !== yStr[i]) distance++;
  }

  return distance;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance_bitwise = function (x, y) {
  let distance = 0;

  x ^= y;

  while (x > 0) {
    distance += x & 1;
    x >>= 1;
  }

  return distance;
};

/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance_bitwiseStr = function (x, y) {
  return (x ^ y).toString(2).replace(/0/g, '').length;
};

const hammingDistance = hammingDistance_bitwise;

console.log(hammingDistance(1, 4) === 2);
console.log(hammingDistance(0, 0) === 0);
console.log(hammingDistance(4, 14) === 2);
