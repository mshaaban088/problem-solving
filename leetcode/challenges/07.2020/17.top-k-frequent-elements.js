// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3393/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function (nums, k) {
  const freqsMap = nums.reduce((freqsMap, num) => {
    freqsMap.set(num, (freqsMap.get(num) || 0) + 1);
    return freqsMap;
  }, new Map());

  const n = nums.length + 1;
  const freqArrSorted = Array(n);

  for (let i = 0; i < n; i++) {
    freqArrSorted[i] = [];
  }

  for (const [num, freq] of freqsMap) {
    freqArrSorted[freq].push(num);
  }

  const topK = [];

  for (let i = n - 1; i >= 0; i--) {
    for (const num of freqArrSorted[i]) {
      topK.push(num);
      k--;
      if (k === 0) {
        return topK;
      }
    }
  }

  return topK;
};

console.log(
  topKFrequent([1, 1, 1, 2, 2, 3], 2).toString() === [1, 2].toString()
);
console.log(topKFrequent([1], 1).toString() === [1].toString());
