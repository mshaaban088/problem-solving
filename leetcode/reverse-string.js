var _reverseString = function (s, i) {
  const mid = s.length / 2;

  if (i >= mid) {
    return;
  }

  const swapee = s.length - i - 1;
  const temp = s[i];
  s[i] = s[swapee];
  s[swapee] = temp;

  _reverseString(s, i + 1);
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  //*
  // Recursion
  _reverseString(s, 0);
  /*/
  let left = 0,
    right = s.length - 1;

  while (left < right) {
    const tmp = s[left];
    s[left++] = s[right];
    s[right--] = tmp;
  }
  //*/
};

const input1 = ['h', 'e', 'l', 'l', 'o'];
reverseString(input1);
console.log(input1); // ["o","l","l","e","h"]

const input2 = ['H', 'a', 'n', 'n', 'a', 'h'];
reverseString(input2);
console.log(input2); // ["h","a","n","n","a","H"]
