// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3404/

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
const leastInterval = function (tasks, n) {
  const freq = Array(26).fill(0);
  for (const task of tasks) {
    freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
  }

  freq.sort((a, b) => a - b);

  const maxFreq = freq[25] - 1;
  let idleSlots = maxFreq * n;

  for (let i = 24; i >= 0; i--) {
    idleSlots -= Math.min(freq[i], maxFreq);
  }

  idleSlots = Math.max(idleSlots, 0);
  return tasks.length + idleSlots;
};

console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 2) === 8);
console.log(leastInterval(['A', 'A', 'A', 'B', 'B', 'B'], 0) === 6);
console.log(
  leastInterval(
    ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'],
    2
  ) === 16
);
