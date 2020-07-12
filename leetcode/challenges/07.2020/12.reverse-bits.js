// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3388/

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
  let reversed = 0,
    length = 31;

  while (n !== 0) {
    reversed += ((n & 1) << length--) >>> 0;
    n >>>= 1;
  }

  return reversed;
};

console.log(
  reverseBits(0b00000010100101000001111010011100) ===
    0b00111001011110000010100101000000
);

console.log(
  reverseBits(0b11111111111111111111111111111101) ===
    0b10111111111111111111111111111111
);
