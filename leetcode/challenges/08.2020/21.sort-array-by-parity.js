// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3431/

/**
 * @param {number[]} A
 * @return {number[]}
 */
const sortArrayByParity = function (A) {
  const even = [],
    odd = [];

  for (const a of A) {
    if (a % 2 === 0) even.push(a);
    else odd.push(a);
  }

  return even.concat(odd);
};

console.log(sortArrayByParity([3, 1, 2, 4])); // [2,4,3,1]
