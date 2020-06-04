// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3350/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = function (s) {
  let i = 0,
    j = s.length - 1;
  while (i < j) {
    const temp = s[i];
    s[i++] = s[j];
    s[j--] = temp;
  }
};

const s1 = ['h', 'e', 'l', 'l', 'o'];
reverseString(s1);
console.log(s1); // ["o","l","l","e","h"]

const s2 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(s2);

console.log(s2); // ["h","a","n","n","a","H"]
