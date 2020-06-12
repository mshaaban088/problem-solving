// Problem: https://leetcode.com/problems/merge-sorted-array/description/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Index = nums1.length - m,
    nums2Index = 0,
    sortedIndex = 0;

  // Shift nums1 to the end
  for (let i = nums1.length - 1; i >= nums1Index; i--) {
    nums1[i] = nums1[i - nums1Index];
  }

  // Merge nums2 into nums1
  while (nums2Index < n) {
    nums1[sortedIndex++] = nums1[nums1Index] < nums2[nums2Index] ? nums1[nums1Index++] : nums2[nums2Index++];
  }
};

/*
Input:
nums1 = [1,2,3,0,0,0], m = 3
nums2 = [2,5,6],       n = 3

Output: [1,2,2,3,5,6]

*/

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums2 = [2, 5, 6];
let n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,2,3,5,6]

nums1 = [1, 2, 4, 5, 6, 0];
m = 5;
nums2 = [3];
n = 1;

merge(nums1, m, nums2, n);
console.log(nums1); // [1,2,3,4,5,6]
