/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
  const charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (!charMap.has(c)) {
      charMap.set(c, { c, i, count: 0 });
    }
    charMap.get(c).count++;
  }

  for (let [c, { count, i }] of charMap) {
    if (count === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('leetcode') === 0);
console.log(firstUniqChar('loveleetcode') === 2);
