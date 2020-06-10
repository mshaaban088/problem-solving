// Problems: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3356/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
  let low = 0,
    high = nums.length;

  while (low < high) {
    const mid = (low + high) >> 1;
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }

  return low;
};

console.log(searchInsert([1, 3, 5, 6], 5) === 2);
console.log(searchInsert([1, 3, 5, 6], 2) === 1);
console.log(searchInsert([1, 3, 5, 6], 7) === 4);
console.log(searchInsert([1, 3, 5, 6], 0) === 0);
