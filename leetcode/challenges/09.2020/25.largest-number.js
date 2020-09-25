// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3472/

/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
  if (Math.max(...nums) === 0) return '0';

  return nums
    .map(String)
    .sort((a, b) => b + a - (a + b))
    .join('');
};

console.log(largestNumber([10, 2]) === '210');
console.log(largestNumber([3, 30, 34, 5, 9]) === '9534330');
console.log(largestNumber([121, 12]) === '12121');
console.log(largestNumber([0, 0, 0, 0]) === '0');
console.log(
  largestNumber([999999998, 999999997, 999999999]) ===
    '999999999999999998999999997'
);
