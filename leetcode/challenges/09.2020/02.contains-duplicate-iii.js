// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3446/

/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t && j - i <= k) {
        return true;
      }
    }
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([1, 2, 3, 1], 3, 0) === true);
console.log(containsNearbyAlmostDuplicate([1, 0, 1, 1], 1, 2) === true);
console.log(containsNearbyAlmostDuplicate([1, 5, 9, 1, 5, 9], 2, 3) === false);
