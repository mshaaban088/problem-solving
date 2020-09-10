// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3455/

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function (secret, guess) {
  const counts = Array(10).fill(0);
  let As = 0,
    Bs = 0;

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] === guess[i]) As++;
    else counts[+secret[i]]++;
  }

  for (let i = 0; i < secret.length; i++) {
    if (secret[i] != guess[i] && counts[+guess[i]]-- > 0) {
      Bs++;
    }
  }

  return `${As}A${Bs}B`;
};

console.log(getHint('1807', '7810') === '1A3B');
console.log(getHint('1123', '0111') === '1A1B');
