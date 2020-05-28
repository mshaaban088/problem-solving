/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
  const dp = Array(num + 1).fill(-1);
  dp[0] = 0;
  let i = 0;
  let twoPowerI = 1 << i;
  while (twoPowerI <= num) {
    while (i < twoPowerI && i + twoPowerI <= num) {
      dp[i + twoPowerI] = dp[i] + 1;
      i++;
    }
    i = 0;
    twoPowerI = twoPowerI << 1;
  }

  return dp;
};

console.log(countBits(2).toString() === [0, 1, 1].toString());
console.log(countBits(5).toString() === [0, 1, 1, 2, 1, 2].toString());
