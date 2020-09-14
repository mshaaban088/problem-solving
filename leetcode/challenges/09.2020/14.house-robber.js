// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3459/

/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
  const memo = Array(nums.length);

  function robHelper(nums, index, sum) {
    if (index >= nums.length) return 0;
    if (index in memo) return memo[index];

    memo[index] = Math.max(
      robHelper(nums, index + 2) + nums[index],
      robHelper(nums, index + 1)
    );

    return memo[index];
  }

  return robHelper(nums, 0, 0);
};

console.log(rob([1, 2, 3, 1]) === 4);
console.log(rob([2, 7, 9, 3, 1]) === 12);
console.log(rob([1, 2, 1, 1]) === 3);
console.log(
  rob([
    114,
    117,
    207,
    117,
    235,
    82,
    90,
    67,
    143,
    146,
    53,
    108,
    200,
    91,
    80,
    223,
    58,
    170,
    110,
    236,
    81,
    90,
    222,
    160,
    165,
    195,
    187,
    199,
    114,
    235,
    197,
    187,
    69,
    129,
    64,
    214,
    228,
    78,
    188,
    67,
    205,
    94,
    205,
    169,
    241,
    202,
    144,
    240,
  ]) === 4173
);
