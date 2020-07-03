// Problem: https://leetcode.com/explore/featured/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3379/

/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
const prisonAfterNDays = function (cells, N) {
  N = N % 14 || 14;

  for (let i = 0; i < N; i++) {
    let initialCells = [...cells];
    for (let j = 1; j < cells.length - 1; j++) {
      initialCells[j] = cells[j - 1] === cells[j + 1] ? 1 : 0;
    }
    if (i === 0) {
      initialCells[0] = 0;
      initialCells[initialCells.length - 1] = 0;
    }
    cells = initialCells;
  }

  return cells;
};

/*
Input: cells = [0,1,0,1,1,0,0,1], N = 7
Output: [0,0,1,1,0,0,0,0]

Explanation:
The following table summarizes the state of the prison on each day:
Day 0: [0, 1, 0, 1, 1, 0, 0, 1]
Day 1: [0, 1, 1, 0, 0, 0, 0, 0]
Day 2: [0, 0, 0, 0, 1, 1, 1, 0]
Day 3: [0, 1, 1, 0, 0, 1, 0, 0]
Day 4: [0, 0, 0, 0, 0, 1, 0, 0]
Day 5: [0, 1, 1, 1, 0, 1, 0, 0]
Day 6: [0, 0, 1, 0, 1, 1, 0, 0]
Day 7: [0, 0, 1, 1, 0, 0, 0, 0]

*/

console.log(
  prisonAfterNDays([0, 1, 0, 1, 1, 0, 0, 1], 7).toString() ===
    [0, 0, 1, 1, 0, 0, 0, 0].toString()
);

/*
It repeats every 14 days

0,0,0,1,0,0,1,0
0,1,0,1,0,0,1,0
0,1,1,1,0,0,1,0
0,0,1,0,0,0,1,0
0,0,1,0,1,0,1,0
0,0,1,1,1,1,1,0
0,0,0,1,1,1,0,0
0,1,0,0,1,0,0,0
0,1,0,0,1,0,1,0
0,1,0,0,1,1,1,0
0,1,0,0,0,1,0,0
0,1,0,1,0,1,0,0
0,1,1,1,1,1,0,0
0,0,1,1,1,0,0,0
0,0,0,1,0,0,1,0
0,1,0,1,0,0,1,0
0,1,0,1,0,0,1,0
*/

console.log(
  prisonAfterNDays([1, 0, 0, 1, 0, 0, 1, 0], 1000000000).toString() ===
    [0, 0, 1, 1, 1, 1, 1, 0].toString()
);

console.log(
  prisonAfterNDays([1, 0, 0, 1, 0, 0, 0, 1], 826).toString() ===
    [0, 1, 1, 0, 1, 1, 1, 0].toString()
);
