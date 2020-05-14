/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
  const nums = num.split('');
  for (let i = 0; i < k; i++) {
    let j = 0;
    while (j < nums.length - 1 && nums[j] <= nums[j + 1]) {
      j++;
    }
    nums.splice(j, 1);
  }

  while (nums.length && nums[0] === '0') {
    nums.splice(0, 1);
  }

  return nums.length ? nums.join('') : '0';
};

console.log(removeKdigits('1432219', 3) === '1219');
console.log(removeKdigits('10200', 1) === '200');
console.log(removeKdigits('10', 2) === '0');
console.log(removeKdigits('0', 0) === '0');
console.log(removeKdigits('112', 1) === '11');
