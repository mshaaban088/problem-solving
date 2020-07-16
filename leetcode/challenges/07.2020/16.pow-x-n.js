// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3392/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
  if (n === 0) return 1;
  if (n === -1) return 1 / x;

  const halfPower = myPow(x, Math.floor(n / 2));

  if (n % 2 === 0) return halfPower * halfPower;
  return x * halfPower * halfPower;
};

const isEqual = (a, b) => Math.abs(a - b) < 1e-5;

console.log(isEqual(myPow(2.0, 10), 1024.0));
console.log(isEqual(myPow(2.1, 3), 9.261));
console.log(isEqual(myPow(2.0, -2), 0.25));
