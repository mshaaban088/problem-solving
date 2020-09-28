// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3475/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
  const n = nums.length;
  let count = 0;

  for (let i = 0; i < n; i++) {
    let product = 1;
    for (let j = i; j < n; j++) {
      product *= nums[j];

      if (product < k) {
        count++;
      } else {
        break;
      }
    }
  }

  return count;
};

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100) === 8);

// Check TLE
const nums = Array(50000);
const k = Math.floor(Math.random() * 1e6);

for (let i = 0; i < nums.length; i++) {
  nums[i] = Math.floor(Math.random() * 1000);
}

console.log(numSubarrayProductLessThanK(nums, k));
