// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3360/
// Bellman-Ford
/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, K) {
  let costs = Array(n).fill(Number.MAX_VALUE);
  costs[src] = 0;

  for (let k = 0; k <= K; k++) {
    const costPerStop = Array(...costs);
    for (const [from, to, cost] of flights) {
      costPerStop[to] = Math.min(costPerStop[to], costs[from] + cost);
    }
    costs = costPerStop;
  }

  return costs[dst] === Number.MAX_VALUE ? -1 : costs[dst];
};

console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    1
  ) === 200
);
console.log(
  findCheapestPrice(
    3,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
    ],
    0,
    2,
    0
  ) === 500
);
console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 100],
      [1, 2, 100],
      [0, 2, 500],
      [2, 3, 200],
    ],
    0,
    3,
    0
  ) === -1
);

console.log(
  findCheapestPrice(
    4,
    [
      [0, 1, 1],
      [0, 2, 5],
      [1, 2, 1],
      [2, 3, 1],
    ],
    0,
    3,
    1
  ) === 6
);
