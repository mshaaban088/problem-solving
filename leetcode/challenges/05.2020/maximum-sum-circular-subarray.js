const kadane = function (A) {
  let globalMax = -Infinity;
  let currentMax = -Infinity;

  for (let i = 0; i < A.length; i++) {
    currentMax = Math.max(currentMax, 0) + A[i];
    globalMax = Math.max(currentMax, globalMax);
  }
  return globalMax;
};

const allNegative = function (A) {
  for (let i = 0; i < A.length; i++) {
    if (A[i] >= 0) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number[]} A
 * @return {number}
 */
const maxSubarraySumCircular = function (A) {
  if (allNegative(A)) {
    return Math.max(...A);
  }

  const maxKadane = kadane(A);
  let maxWrap = 0;

  for (let i = 0; i < A.length; i++) {
    maxWrap += A[i];
    A[i] = -A[i];
  }

  maxWrap = maxWrap + kadane(A);

  return Math.max(maxWrap, maxKadane);
};

console.log(maxSubarraySumCircular([1, -2, 3, -2]) === 3);
console.log(maxSubarraySumCircular([5, -3, 5]) === 10);
console.log(maxSubarraySumCircular([3, -1, 2, -1]) === 4);
console.log(maxSubarraySumCircular([3, -2, 2, -3]) === 3);
console.log(maxSubarraySumCircular([-2, -3, -1]) === -1);

// Testing maximum input array
const max = 30000;
const min = -30000;
const arr = Array(max);
for (let i = 0; i < arr.length; i++) {
  arr[i] = Math.floor(Math.random() * (max - min)) + min;
}

console.log(maxSubarraySumCircular(arr));
