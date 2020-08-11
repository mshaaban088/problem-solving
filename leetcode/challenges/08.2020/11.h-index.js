// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3420/

/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function (citations) {
  const n = citations.length;
  const counts = Array(n + 1).fill(0);

  for (const c of citations) {
    if (c >= n) {
      counts[n]++;
    } else {
      counts[c]++;
    }
  }

  let h = 0;

  for (let i = n; i >= 0; i--) {
    h += counts[i];

    if (h >= i) {
      return i;
    }
  }

  return 0;
};

console.log(hIndex([3, 0, 6, 1, 5]) === 3);
