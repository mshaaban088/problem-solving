// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3448/

/**
 * @param {string} S
 * @return {number[]}
 */
const partitionLabels = function (S) {
  const lastSeen = new Map();

  for (let i = 0; i < S.length; i++) {
    lastSeen.set(S[i], i);
  }

  const partitions = [];

  let maxIndex = 0,
    lastMax = 0;

  for (let i = 0; i < S.length; i++) {
    maxIndex = Math.max(maxIndex, lastSeen.get(S[i]));
    if (i === maxIndex) {
      partitions.push(i + 1 - lastMax);
      lastMax = i + 1;
    }
  }

  return partitions;
};

console.log(
  partitionLabels('ababcbacadefegdehijhklij').toString() ===
    [9, 7, 8].toString()
);
console.log(partitionLabels('abaccbdeffed').toString() === [6, 6].toString());
console.log(partitionLabels('caedbdedda').toString() === [1, 9].toString());
console.log(partitionLabels('eaaaabaaec').toString() === [9, 1].toString());
