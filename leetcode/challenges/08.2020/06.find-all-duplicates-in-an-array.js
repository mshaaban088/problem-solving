// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3414/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates_withCounts = function (nums) {
  const counts = Array(nums.length + 1).fill(0);
  const duplicates = [];

  for (const num of nums) {
    counts[num]++;
  }

  for (let i = 1; i < counts.length; i++) {
    if (counts[i] > 1) {
      duplicates.push(i);
    }
  }

  return duplicates;
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates_inplace = function (nums) {
  const duplicates = [];

  for (const num of nums) {
    const i = Math.abs(num) - 1;
    if (nums[i] < 0) {
      duplicates.push(i + 1);
    } else {
      nums[i] *= -1;
    }
  }

  return duplicates;
};

const findDuplicates = findDuplicates_inplace;

console.log(
  findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]).toString() === [2, 3].toString()
);
