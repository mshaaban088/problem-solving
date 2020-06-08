// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3354/

/**
 * @param {number} n
 * @return {boolean}
 */
const isPowerOfTwo = function (n) {
  let i = 0,
    current = 0;

  while (current <= n) {
    current = Math.pow(2, i++);
    if (current === n) return true;
  }

  return false;
};

const isPowerOfTwo_binary = function (n) {
  if (n < 1) return false;
  const binary = n.toString(2);
  let ones = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === '1' && ones++ > 1) {
      return false;
    }
  }
  return ones === 1;
};

console.log(isPowerOfTwo(1) === true);
console.log(isPowerOfTwo(8) === true);
console.log(isPowerOfTwo(16) === true);
console.log(isPowerOfTwo(218) === false);
// Check 0
console.log(isPowerOfTwo(0) === false);
// Check negative
console.log(isPowerOfTwo(-16) === false);
// Check TLE
console.log(isPowerOfTwo(1073741825) === false);
