// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/556/week-3-september-15th-september-21st/3462/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaximumXOR = function (nums) {
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      max = Math.max(max, nums[i] ^ nums[j]);
    }
  }

  return max;
};

console.log(findMaximumXOR([3, 10, 5, 25, 2, 8]) === 28);
