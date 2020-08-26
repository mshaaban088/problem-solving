// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3437/

/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const out = Array(n);

  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) out[i - 1] = 'FizzBuzz';
    else if (i % 5 === 0) out[i - 1] = 'Buzz';
    else if (i % 3 === 0) out[i - 1] = 'Fizz';
    else out[i - 1] = i.toString();
  }
  return out;
};

console.log(
  fizzBuzz(15).toString() ===
    [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
    ].toString()
);
