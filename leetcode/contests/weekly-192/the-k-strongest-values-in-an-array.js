// Problem: https://leetcode.com/contest/weekly-contest-192/problems/the-k-strongest-values-in-an-array/

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getStrongest = function (arr, k) {
  const mid = arr.sort((a, b) => a - b)[Math.floor((arr.length - 1) / 2)];

  return arr
    .sort((a, b) => {
      const aDiff = Math.abs(a - mid),
        bDiff = Math.abs(b - mid);
      if (aDiff > bDiff) {
        return -1;
      } else if (aDiff === bDiff) {
        return b - a;
      } else {
        return 1;
      }
    })
    .slice(0, k);
};

console.log(getStrongest([1, 2, 3, 4, 5], 2)); // [5,1]
console.log(getStrongest([1, 1, 3, 5, 5], 2)); // [5,5]
console.log(getStrongest([6, 7, 11, 7, 6, 8], 5)); // [11,8,6,6,7]
console.log(getStrongest([6, -3, 7, 2, 11], 3)); // [-3,11,2]
console.log(getStrongest([-7, 22, 17, 3], 2)); // [22,17]
