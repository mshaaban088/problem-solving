// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3355/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
  if (t.length < s.length) {
    return false;
  }
  let i = 0,
    j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      i++;
      if (i === s.length) {
        return true;
      }
    }
    j++;
  }
  return i === s.length;
};

console.log(isSubsequence('abc', 'ahbgdc') === true);
console.log(isSubsequence('axc', 'ahbgdc') === false);
console.log(isSubsequence('abc', 'ahbgdf') === false);
console.log(isSubsequence('', 'ahbgdf') === true);

// Check TLE
let s = Array(100);
let t = Array(1e4);
for (let i = 0; i < s.length; i++) {
  s[i] = String.fromCharCode(Math.floor(Math.random() * 127));
}
for (let i = 0; i < t.length; i++) {
  t[i] = String.fromCharCode(Math.floor(Math.random() * 127));
}

console.log(isSubsequence(s.join(''), t.join('')));
