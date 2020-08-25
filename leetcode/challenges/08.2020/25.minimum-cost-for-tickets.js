// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3436/

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  const lastDay = days[days.length - 1];
  const dp = Array(lastDay + 1).fill(0);
  const availableDays = new Set(days);

  for (let day = 1; day <= lastDay; day++) {
    if (availableDays.has(day)) {
      dp[day] = Math.min(
        dp[Math.max(0, day - 1)] + costs[0],
        dp[Math.max(0, day - 7)] + costs[1],
        dp[Math.max(0, day - 30)] + costs[2]
      );
    } else {
      dp[day] = dp[day - 1];
    }
  }

  return dp[lastDay];
};

console.log(mincostTickets([1, 4, 6, 7, 8, 20], [2, 7, 15]) === 11);
console.log(
  mincostTickets([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 30, 31], [2, 7, 15]) === 17
);

// Check TLE
console.log(
  mincostTickets(
    [
      3,
      5,
      6,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      20,
      21,
      23,
      25,
      26,
      27,
      29,
      30,
      33,
      34,
      35,
      36,
      38,
      39,
      40,
      42,
      45,
      46,
      47,
      48,
      49,
      51,
      53,
      54,
      56,
      57,
      58,
      59,
      60,
      61,
      63,
      64,
      67,
      68,
      69,
      70,
      72,
      74,
      77,
      78,
      79,
      80,
      81,
      82,
      83,
      84,
      85,
      88,
      91,
      92,
      93,
      96,
    ],
    [3, 17, 57]
  ) === 170
);
