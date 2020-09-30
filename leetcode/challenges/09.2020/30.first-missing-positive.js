// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/558/week-5-september-29th-september-30th/3478/

/**
 * @param {number[]} nums
 * @return {number}
 */
const firstMissingPositive = function (nums) {
  const set = new Set(nums);
  let missing = 1;

  while (set.has(missing)) missing++;

  return missing;
};

console.log(firstMissingPositive([1, 2, 0]) === 3);
console.log(firstMissingPositive([3, 4, -1, 1]) === 2);
console.log(firstMissingPositive([7, 8, 9, 11, 12]) === 1);
console.log(firstMissingPositive([2, 1]) === 3);
console.log(firstMissingPositive([0, 2, 2, 4, 0, 1, 0, 1, 3]) === 5);
console.log(firstMissingPositive([2147483647]) === 1);
