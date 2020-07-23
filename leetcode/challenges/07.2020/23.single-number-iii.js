// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3399/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber_loop = function (nums) {
  return [
    ...nums.reduce((set, n) => {
      set.has(n) ? set.delete(n) : set.add(n);
      return set;
    }, new Set()),
  ];
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber_bitwise = function (nums) {
  const xor = nums.reduce((single, n) => single ^ n, 0);
  const partition = xor & ~(xor - 1);
  const output = [0, 0];

  for (const n of nums) {
    if (partition & n) {
      output[0] ^= n;
    } else {
      output[1] ^= n;
    }
  }

  return output;
};

const singleNumber = singleNumber_bitwise;

/*
Input:  [1,2,1,3,2,5]
Output: [3,5]
*/

console.log(singleNumber([1, 2, 1, 3, 2, 5])); // [3,5]
