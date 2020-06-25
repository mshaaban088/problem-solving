// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3371/

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate_nSpace = function (nums) {
  const counts = new Map();

  for (const num of nums) {
    if (counts.has(num)) return num;
    counts.set(num, 1);
  }

  return -1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const findDuplicate_floydCycleDetection = function (nums) {
  if (nums.length <= 1) return -1;

  let slow = nums[0],
    fast = nums[nums[0]];

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[nums[fast]];
  }

  slow = 0;

  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }

  return slow;
};

const findDuplicate = findDuplicate_floydCycleDetection;

console.log(findDuplicate([1, 3, 4, 2, 2]) === 2);
console.log(findDuplicate([3, 1, 3, 4, 2]) === 3);
