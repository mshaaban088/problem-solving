// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3366/

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9],
    fact = [0, 1, 2, 6, 24, 120, 720, 5040, 40320];
  let output = '';

  k--;

  for (let i = n - 1; i >= 0; i--) {
    const index = Math.floor(k / fact[i]);
    output += numbers.splice(index, 1)[0];
    k %= fact[i];
  }

  return output;
};

console.log(getPermutation(3, 3) === '213');
console.log(getPermutation(4, 9) === '2314');
