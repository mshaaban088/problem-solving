/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = function (nums) {
  const halfLength = nums.length / 2;
  const counts = nums.reduce((all, n) => {
    all.set(n, (all.get(n) || 0) + 1);
    return all;
  }, new Map());

  for (let [n, count] of counts) {
    if (count > halfLength) return n;
  }
  return -1;
};

console.log(majorityElement([3, 2, 3]) === 3);
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]) === 2);
