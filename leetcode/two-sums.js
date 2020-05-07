/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const rest = target - nums[i];
    if (map.has(rest)) return [map.get(rest), i];
    map.set(nums[i], i);
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
