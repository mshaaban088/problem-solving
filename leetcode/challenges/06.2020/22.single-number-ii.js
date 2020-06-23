// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3368/

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber_hashmap = function (nums) {
  const counts = new Map();

  for (const n of nums) {
    const count = counts.get(n) || 0;
    if (count + 1 === 3) {
      counts.delete(n);
    } else {
      counts.set(n, count + 1);
    }
  }

  return counts.keys().next().value;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber_bitwise = function (nums) {
  let a = 0,
    b = 0;

  for (const n of nums) {
    b = (b ^ n) & ~a;
    a = (a ^ n) & ~b;
  }

  return b;
};

const singleNumber = singleNumber_hashmap;

console.log(singleNumber([2, 2, 3, 2]) === 3);
console.log(singleNumber([0, 1, 0, 1, 0, 1, 99]) === 99);
