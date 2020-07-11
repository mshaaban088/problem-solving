// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3387/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets = function (nums) {
  const all = [];

  function subsetsHelper(index, current) {
    all.push(current);
    for (let i = index; i < nums.length; i++) {
      subsetsHelper(i + 1, [...current, nums[i]]);
    }
  }

  subsetsHelper(0, []);
  return all;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsets_2 = function (nums) {
  const allSubSets = [];
  function getSubsets(index, currentSet) {
    if (index >= nums.length) {
      allSubSets.push(currentSet);
      return;
    }

    // Ignore
    getSubsets(index + 1, currentSet);

    // Include
    getSubsets(index + 1, currentSet.concat(nums[index]));
  }

  getSubsets(0, []);

  return allSubSets;
};

/*
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/
console.log(subsets([1, 2, 3]));
