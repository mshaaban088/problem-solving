// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3456/

/**
 * @param {number[]} nums
 * @return {number}
 */
const maxProduct = function (nums) {
  const n = nums.length;
  let maxSoFar = nums[0],
    minSoFar = nums[0],
    max = nums[0];

  for (let i = 1; i < n; i++) {
    const prevMax = maxSoFar;
    maxSoFar = Math.max(nums[i], maxSoFar * nums[i], minSoFar * nums[i]);
    minSoFar = Math.min(nums[i], prevMax * nums[i], minSoFar * nums[i]);
    max = Math.max(max, maxSoFar);
  }
  return max;
};

console.log(maxProduct([2, 3, -2, 4]) === 6);
console.log(maxProduct([-2, 0, -1]) === 0);
console.log(maxProduct([-2]) === -2);
