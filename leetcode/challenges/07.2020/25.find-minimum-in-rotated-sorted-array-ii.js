// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3401/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
  let left = 0,
    right = nums.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (nums[mid] < nums[right]) {
      // e.g. nums = [5,6,1,2,3,4], nums[mid] = 2, nums[right] = 4
      right = mid;
    } else if (nums[mid] > nums[right]) {
      // e.g. nums = [5,6,1,2,3,4], nums[mid] = 6, nums[right] = 2
      left = mid + 1;
    } else {
      right = right - 1;
    }
  }

  return nums[left];
};

console.log(findMin([1, 3, 5]) === 1);
console.log(findMin([2, 2, 2, 0, 1]) === 0);
