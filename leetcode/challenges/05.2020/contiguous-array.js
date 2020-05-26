/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
  let maxLength = 0;
  let count = 0;
  const countMap = new Map();
  countMap.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    count += nums[i] === 0 ? -1 : 1;
    if (countMap.has(count)) {
      maxLength = Math.max(maxLength, i - countMap.get(count));
    } else {
      countMap.set(count, i);
    }
  }

  return maxLength;
};

console.log(findMaxLength([0, 1]) === 2);
console.log(findMaxLength([0, 1, 0]) === 2);
