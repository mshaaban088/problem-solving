// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3382/

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
  let remainder = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + remainder;
    digits[i] = sum % 10;
    remainder = Math.floor(sum / 10);

    if (remainder === 0) break;
  }

  if (remainder) {
    digits.unshift(remainder);
  }

  return digits;
};

console.log(plusOne([1, 2, 3]).toString() === [1, 2, 4].toString());
console.log(plusOne([4, 3, 2, 1]).toString() === [4, 3, 2, 2].toString());
console.log(plusOne([9, 9, 9]).toString() === [1, 0, 0, 0].toString());
