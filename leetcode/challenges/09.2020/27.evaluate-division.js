// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3474/

/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
  function dfs(all, source, target, visited = {}, value = 1) {
    if (!(source in all) || visited[source]) return -1;
    if (source === target) return value;

    visited[source] = true;

    for (const c in all[source]) {
      const v = dfs(all, c, target, visited, value * all[source][c]);
      if (v > -1) return v;
    }

    return -1;
  }

  const all = {};

  for (let i = 0; i < equations.length; i++) {
    const [a, b] = equations[i];
    const val = values[i];

    all[a] = all[a] || {};
    all[b] = all[b] || {};
    all[a][b] = val;
    all[b][a] = 1.0 / val;
  }

  const result = [];

  for (const [a, b] of queries) {
    result.push(dfs(all, a, b));
  }

  return result;
};

console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
    ],
    [2.0, 3.0],
    [
      ['a', 'c'],
      ['b', 'a'],
      ['a', 'e'],
      ['a', 'a'],
      ['x', 'x'],
    ]
  )
); // [6.0, 0.5, -1.0, 1.0, -1.0]
console.log(
  calcEquation(
    [
      ['a', 'b'],
      ['b', 'c'],
      ['bc', 'cd'],
    ],
    [1.5, 2.5, 5.0],
    [
      ['a', 'c'],
      ['c', 'b'],
      ['bc', 'cd'],
      ['cd', 'bc'],
    ]
  )
); // [3.75, 0.4, 5.0, 0.2]
console.log(
  calcEquation(
    [['a', 'b']],
    [0.5],
    [
      ['a', 'b'],
      ['b', 'a'],
      ['a', 'c'],
      ['x', 'y'],
    ]
  )
); // [0.5, 2.0, -1.0, -1.0]
