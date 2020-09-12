// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3457/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const combinations = [];

  function combinationSum3Helper(target, start, current) {
    if (target === 0 && current.length === k) {
      combinations.push([...current]);
      return;
    }
    if (target < 0 || current.length === k) return;

    for (let i = start; i < 9; i++) {
      current.push(i + 1);
      combinationSum3Helper(target - i - 1, i + 1, current);
      current.pop();
    }
  }

  combinationSum3Helper(n, 0, []);

  return combinations;
};

console.log(combinationSum3(3, 7)); // [[1,2,4]]
console.log(combinationSum3(3, 9)); // [[1,2,6], [1,3,5], [2,3,4]]
