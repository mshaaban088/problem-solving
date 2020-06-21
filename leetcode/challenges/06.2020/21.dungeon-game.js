// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3367/

/**
 * @param {number[][]} dungeon
 * @return {number}
 */
const calculateMinimumHP = function (dungeon) {
  const n = dungeon.length,
    m = dungeon[0].length,
    costs = Array(n + 1);

  for (let i = 0; i < costs.length; i++) {
    costs[i] = Array(m + 1).fill(Number.MAX_VALUE);
  }

  costs[n][m - 1] = 1;
  costs[n - 1][m] = 1;

  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      const min = Math.min(costs[i + 1][j], costs[i][j + 1]) - dungeon[i][j];
      costs[i][j] = Math.max(min, 1);
    }
  }

  return costs[0][0];
};

/*

Input:

-2 (K)	-3	    3
-5	    -10	    1
10	    30	    -5 (P)

*/

console.log(
  calculateMinimumHP([
    [-2, -3, 3],
    [-5, -10, 1],
    [10, 30, -5],
  ]) === 7
);

console.log(calculateMinimumHP([[100]]) === 1);
