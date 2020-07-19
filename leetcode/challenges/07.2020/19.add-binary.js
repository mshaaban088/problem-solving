// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3395/

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = function (a, b) {
  const maxLength = Math.max(a.length, b.length);

  if (a.length === 0) return b;
  if (b.length === 0) return a;

  a = a.padStart(maxLength, '0');
  b = b.padStart(maxLength, '0');

  let output = '',
    carry = 0;

  for (let i = maxLength - 1; i >= 0; i--) {
    const sum = parseInt(a[i]) + parseInt(b[i]) + carry;

    output = (sum % 2) + output;
    carry = Math.floor(sum / 2);
  }

  if (carry) {
    output = carry + output;
  }

  return output;
};

console.log(addBinary((a = '11'), '1') === '100');
console.log(addBinary((a = '1010'), '1011') === '10101');
