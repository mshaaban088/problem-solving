// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3351/

class Solution {
  /**
   * @param {number[]} w
   */
  constructor(w) {
    const newWeights = Array(w.length);
    let sum = 0;
    for (let i = 0; i < w.length; i++) {
      sum += w[i];
      newWeights[i] = sum;
    }
    this.w = newWeights;
    this.max = newWeights[newWeights.length - 1];
  }
  /**
   * @return {number}
   */
  pickIndex() {
    const r = Math.floor(Math.random() * this.max);
    let left = 0,
      right = this.w.length;

    while (left < right) {
      const mid = (left + right) >> 1;
      if (r < this.w[mid]) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

const s1 = new Solution([1]);
console.log(s1.pickIndex()); // 0

const s2 = new Solution([1, 3]);
console.log(s2.pickIndex()); // 0
console.log(s2.pickIndex()); // 1
console.log(s2.pickIndex()); // 1
console.log(s2.pickIndex()); // 1
console.log(s2.pickIndex()); // 0
