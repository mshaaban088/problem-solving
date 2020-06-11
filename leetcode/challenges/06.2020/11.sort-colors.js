// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3357/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  let start = 0,
    end = nums.length - 1,
    i = 0;

  while (i <= end) {
    if (nums[i] === 0) {
      nums[i++] = 1;
      nums[start++] = 0;
    } else if (nums[i] === 2) {
      nums[i] = nums[end];
      nums[end--] = 2;
    } else {
      i++;
    }
  }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors_twoPasses = function (nums) {
  const colorsCount = Array(3).fill(0);

  for (const n of nums) {
    colorsCount[n]++;
  }
  let i = 0;
  for (let j = 0; j < colorsCount.length; j++) {
    while (colorsCount[j]--) {
      nums[i++] = j;
    }
  }
};

const nums = [2, 0, 2, 1, 1, 0];
console.log(nums); // [2,0,2,1,1,0]
sortColors(nums);
console.log(nums); // [0,0,1,1,2,2]
