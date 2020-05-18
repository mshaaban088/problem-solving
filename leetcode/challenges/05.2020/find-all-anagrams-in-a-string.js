const primes = [
  2n,
  3n,
  5n,
  7n,
  11n,
  13n,
  17n,
  19n,
  23n,
  29n,
  31n,
  37n,
  41n,
  43n,
  47n,
  53n,
  59n,
  61n,
  67n,
  71n,
  73n,
  79n,
  83n,
  89n,
  97n,
  101n,
];

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
const findAnagrams = function (s, p) {
  const anagram = (word) => word.split('').reduce((res, c) => res * primes[c.charCodeAt(0) - 'a'.charCodeAt(0)], 1n);
  const pAnagram = anagram(p);
  const pLength = p.length;
  const anagrams = [];
  let currentAnagram = anagram(s.substring(0, pLength));

  if (currentAnagram === pAnagram) {
    anagrams.push(0);
  }

  for (let i = 1; i <= s.length - pLength; i++) {
    const s1 = primes[s.charCodeAt(i - 1) - 'a'.charCodeAt(0)];
    const s2 = primes[s.charCodeAt(i + pLength - 1) - 'a'.charCodeAt(0)];
    currentAnagram = (currentAnagram / s1) * s2;

    if (currentAnagram === pAnagram) {
      anagrams.push(i);
    }
  }

  return anagrams;
};

console.log(findAnagrams('cbaebabacd', 'abc')); // [0, 6]
console.log(findAnagrams('abab', 'ab')); // [0, 1, 2]
