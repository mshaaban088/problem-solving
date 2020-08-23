// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3433/

class Solution {
  /**
   * @param {number[][]} rects
   */
  constructor(rects) {
    const weights = Array(rects.length);
    let sum = 0;
    for (let i = 0; i < rects.length; i++) {
      const [x1, y1, x2, y2] = rects[i];
      sum += (x2 - x1 + 1) * (y2 - y1 + 1);
      weights[i] = sum;
    }
    this.weights = weights;
    this.rects = rects;
    this.max = this.weights[this.weights.length - 1];
  }

  /**
   * @return {number[]}
   */
  pick() {
    const r = Math.floor(Math.random() * this.max);
    let left = 0,
      right = this.weights.length;

    while (left < right) {
      const mid = (left + right) >> 1;

      if (r < this.weights[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    const [x1, y1, x2, y2] = this.rects[left];
    const randomX = Math.floor(Math.random() * (x2 - x1 + 1) + x1);
    const randomY = Math.floor(Math.random() * (y2 - y1 + 1) + y1);
    return [randomX, randomY];
  }
}

const sol1 = new Solution([[1, 1, 5, 5]]);
console.log(sol1.pick()); // [4,1]
console.log(sol1.pick()); // [4,1]
console.log(sol1.pick()); // [3,3]

const sol2 = new Solution([
  [-2, -2, -1, -1],
  [1, 0, 3, 0],
]);
console.log(sol2.pick()); // [-1,-2]
console.log(sol2.pick()); // [2,0]
console.log(sol2.pick()); // [-2,-1]
console.log(sol2.pick()); // [3,0]
console.log(sol2.pick()); // [-2,-2]
