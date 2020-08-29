// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/553/week-5-august-29th-august-31st/3441/

/**
 * @param {number[]} A
 * @return {number[]}
 */
const pancakeSort = function (A) {
  function flip(A, index) {
    let left = 0,
      right = index;
    while (left < right) {
      const temp = A[left];
      A[left++] = A[right];
      A[right--] = temp;
    }
  }

  const out = [];

  for (let i = A.length - 1; i >= 0; i--) {
    const index = A.findIndex((n) => n === i + 1);

    // If it's already sorted, ignore
    if (index === i) continue;

    flip(A, index);
    flip(A, i);
    out.push(index + 1);
    out.push(i + 1);
  }

  return out;
};

console.log(
  pancakeSort([3, 2, 4, 1]).toString() === [3, 4, 2, 3, 1, 2].toString()
);
console.log(pancakeSort([1, 2, 3]).toString() === [].toString());
