// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3349/

/**
 * @param {number[][]} costs
 * @return {number}
 */
const twoCitySchedCost = function (costs) {
  return costs
    .sort((a, b) => a[0] - a[1] - (b[0] - b[1]))
    .map((cost, i) => (i < costs.length / 2 ? cost[0] : cost[1]))
    .reduce((total, cost) => total + cost, 0);
};

console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
  ]) === 50
);

console.log(
  twoCitySchedCost([
    [10, 20],
    [30, 200],
    [400, 50],
    [30, 20],
  ]) === 110
);

const arr = Array(100);
for (let i = 0; i < arr.length; i++) {
  arr[i] = [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];
}

// Check TLE
console.log(twoCitySchedCost(arr));
