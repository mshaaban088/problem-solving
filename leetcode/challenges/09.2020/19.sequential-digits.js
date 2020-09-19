// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3465/

/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */
const sequentialDigits = function (low, high) {
  const numbers = [];
  const digits = '123456789';

  for (let i = 2; i <= digits.length; i++) {
    for (let j = 0; j <= digits.length - i; j++) {
      const number = Number(digits.substring(j, i + j));
      if (number > high) return numbers;
      if (number >= low) numbers.push(number);
    }
  }
  return numbers;
};

console.log(sequentialDigits(100, 300)); // [123,234]
console.log(sequentialDigits(1000, 13000)); // [1234,2345,3456,4567,5678,6789,12345]
