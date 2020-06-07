// Problem: https://leetcode.com/contest/weekly-contest-192/problems/shuffle-the-array/

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
  const shuffled = Array(nums.length);

  for (let i = 0; i < n; i++) {
    shuffled[i * 2] = nums[i];
    shuffled[i * 2 + 1] = nums[n + i];
  }

  return shuffled;
};

console.log(shuffle([2, 5, 1, 3, 4, 7], 3)); // [2,3,5,4,1,7]
console.log(shuffle([1, 2, 3, 4, 4, 3, 2, 1], 4)); // [1,4,2,3,3,2,4,1]
console.log(shuffle([1, 1, 2, 2], 2)); // [1,2,1,2]
