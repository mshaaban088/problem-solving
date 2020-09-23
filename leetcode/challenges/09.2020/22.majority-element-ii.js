// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3469/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  const freq = new Map();
  const result = new Set();
  const third = nums.length / 3;

  for (const num of nums) {
    freq.set(num, (freq.get(num) || 0) + 1);
    if (freq.get(num) > third) {
      result.add(num);
    }
  }

  return [...result];
};

console.log(majorityElement([3, 2, 3]).toString() === [3].toString());
console.log(
  majorityElement([1, 1, 1, 3, 3, 2, 2, 2]).toString() === [1, 2].toString()
);
