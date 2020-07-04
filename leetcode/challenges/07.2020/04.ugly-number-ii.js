// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3380/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
  let i2 = 0,
    i3 = 0,
    i5 = 0;
  const uglyNumbers = Array(n);
  uglyNumbers[0] = 1;

  for (let i = 1; i < n; i++) {
    uglyNumbers[i] = Math.min(
      uglyNumbers[i2] * 2,
      uglyNumbers[i3] * 3,
      uglyNumbers[i5] * 5
    );

    if (uglyNumbers[i] === uglyNumbers[i2] * 2) i2++;
    if (uglyNumbers[i] === uglyNumbers[i3] * 3) i3++;
    if (uglyNumbers[i] === uglyNumbers[i5] * 5) i5++;
  }

  return uglyNumbers[n - 1];
};

console.log(nthUglyNumber(10) === 12);
console.log(nthUglyNumber(11) === 15);
