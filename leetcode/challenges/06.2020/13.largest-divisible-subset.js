// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3359/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function (nums) {
  if (nums.length < 2) {
    return nums;
  }

  nums.sort((a, b) => a - b);
  const divCount = Array(nums.length).fill(1);
  const prevIndex = Array(nums.length).fill(-1);
  let maxIndex = 0;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] % nums[j] === 0 && divCount[j] + 1 > divCount[i]) {
        divCount[i] = divCount[j] + 1;
        prevIndex[i] = j;
      }
    }
    if (divCount[i] > divCount[maxIndex]) {
      maxIndex = i;
    }
  }

  let i = maxIndex;
  const subset = [];
  while (i >= 0) {
    subset.push(nums[i]);
    i = prevIndex[i];
  }

  return subset;
};

console.log(largestDivisibleSubset([1, 2, 3])); // [1,2] or [1,3]
console.log(largestDivisibleSubset([1, 2, 4, 8])); // [1,2,4,8]
console.log(largestDivisibleSubset([4, 8, 10, 240])); // [4,8,240]
