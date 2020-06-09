// Problem: https://leetcode.com/problems/median-of-two-sorted-arrays/submissions/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = function (nums1, nums2) {
  if (nums1.length > nums2.length) {
    return findMedianSortedArrays(nums2, nums1);
  }

  let n = nums1.length,
    m = nums2.length;
  let low = 0,
    high = n;

  while (low <= high) {
    let partitionX = (low + high) >> 1;
    let partitionY = ((n + m + 1) >> 1) - partitionX;

    let maxLeftX = partitionX === 0 ? Number.NEGATIVE_INFINITY : nums1[partitionX - 1];
    let maxLeftY = partitionY === 0 ? Number.NEGATIVE_INFINITY : nums2[partitionY - 1];
    let minRightX = partitionX === n ? Number.POSITIVE_INFINITY : nums1[partitionX];
    let minRightY = partitionY === m ? Number.POSITIVE_INFINITY : nums2[partitionY];

    if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
      // found
      if ((n + m) % 2 === 0) {
        return (Math.max(maxLeftX, maxLeftY) + Math.min(minRightX, minRightY)) / 2;
      } else {
        return Math.max(maxLeftX, maxLeftY);
      }
    } else if (maxLeftX > minRightY) {
      high = partitionX - 1;
    } else {
      low = partitionX + 1;
    }
  }
  return -1;
};

console.log(findMedianSortedArrays([1, 3], [2]) === 2);
console.log(findMedianSortedArrays([1, 2], [3, 4]) === 2.5);
