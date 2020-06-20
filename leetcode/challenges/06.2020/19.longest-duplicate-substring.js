// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3365/

/**
 * @param {string} S
 * @return {string}
 */
const longestDupSubstring = function (S) {
  const AChar = 'a'.charCodeAt(0);

  function RabinKarp(str, len) {
    let hash = 0,
      a = 26,
      n = str.length,
      mod = Math.pow(2, 32);

    for (let i = 0; i < len; ++i)
      hash = (hash * a + (str.charCodeAt(i) - AChar)) % mod;

    const set = new Set();
    set.add(hash);
    let g = 1;
    for (let i = 0; i < len; ++i) g = (g * a) % mod;

    for (let i = 1; i < n - len + 1; ++i) {
      hash =
        (hash * a - (((str.charCodeAt(i - 1) - AChar) * g) % mod) + mod) % mod;
      hash = (hash + (str.charCodeAt(i + len - 1) - AChar)) % mod;
      if (set.has(hash)) return i;
      set.add(hash);
    }
    return -1;
  }

  let left = 0,
    right = S.length;

  while (left < right) {
    const mid = (left + right) >> 1;

    if (RabinKarp(S, mid) !== -1) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  let start = RabinKarp(S, left - 1);
  return start !== -1 ? S.substring(start, start + left - 1) : '';
};

console.log(longestDupSubstring('banana') === 'ana');
console.log(longestDupSubstring('abcd') === '');

const arr = Array(1e5);
for (let i = 0; i < arr.length; i++) {
  arr[i] = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

longestDupSubstring(arr.join(''));
