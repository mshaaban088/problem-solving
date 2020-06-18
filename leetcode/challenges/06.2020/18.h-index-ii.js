// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3364/

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  let N = citations.length,
    left = 0,
    right = citations.length;

  while (left < right) {
    const mid = (left + right) >> 1;
    const h = N - mid;

    if (citations[mid] >= h) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return N - left;
};

console.log(hIndex([0, 1, 3, 5, 6]) === 3);
console.log(hIndex([3, 4, 5, 8, 10]) === 4);
console.log(hIndex([3, 3, 5, 8, 25]) === 3);
