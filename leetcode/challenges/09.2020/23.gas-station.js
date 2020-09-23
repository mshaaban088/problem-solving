// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/557/week-4-september-22nd-september-28th/3470/

/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
const canCompleteCircuit = function (gas, cost) {
  let startIndex = 0,
    gasSoFar = 0,
    totalGas = 0;

  for (let i = 0; i < gas.length; i++) {
    gasSoFar += gas[i] - cost[i];
    totalGas += gas[i] - cost[i];

    if (gasSoFar < 0) {
      gasSoFar = 0;
      startIndex = i + 1;
    }
  }

  return totalGas >= 0 ? startIndex : -1;
};

console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2]) === 3);
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]) === -1);
