// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3370/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  // Solved using [Catalan Number](https://en.wikipedia.org/wiki/Catalan_number)

  if (n <= 2) return n;

  const fact = Array(2 * n + 1);
  fact[0] = 1;

  for (let i = 1; i <= 2 * n; i++) {
    fact[i] = i * fact[i - 1];
  }

  return fact[2 * n] / (fact[n + 1] * fact[n]);
};

/*
if n = 5, possible trees are
root(1):
  left: 0 nodes = f(0)
  right: 4 nodes = f(4)

  total = f(0) * f(4)

root(2):
  left: 1 node = f(1)
  right: 3 nodes = f(3)

  total = f(1) * f(3)

root(3):
  left: 2 nodes = f(2)
  right: 2 nodes = f(2)

  total = f(2) * f(2)

root(4):
  left: 3 nodes = f(3)
  right: 1 node = f(1)

  total = f(3) * f(1)

root(5):
  left: 4 nodes = f(4)
  right: 0 nodes = f(0)

  total = f(4) * f(0)


Number of unique binary search trees = f(5) = f(0) * f(4) + f(1) * f(3) + f(2) * f(2) + f(3) * f(1) + f(4) * f(0)
*/
console.log(numTrees(3) === 5);
