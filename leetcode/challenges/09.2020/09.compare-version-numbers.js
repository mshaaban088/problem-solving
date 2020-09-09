// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3454/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
const compareVersion = function (version1, version2) {
  const v1 = version1.split('.').map(Number);
  const v2 = version2.split('.').map(Number);
  const maxLength = Math.max(v1.length, v2.length);

  while (v1.length < maxLength) {
    v1.push(0);
  }

  while (v2.length < maxLength) {
    v2.push(0);
  }

  const n1 = parseInt(v1.join(''));
  const n2 = parseInt(v2.join(''));

  if (n1 === n2) return 0;
  if (n1 < n2) return -1;
  return 1;
};

console.log(compareVersion('0.1', '1.1') === -1);
console.log(compareVersion('1.0.1', '1') === 1);
console.log(compareVersion('7.5.2.4', '7.5.3') === -1);
console.log(compareVersion('1.01', '1.001') === 0);
console.log(compareVersion('1.0', '1.0.0') === 0);
