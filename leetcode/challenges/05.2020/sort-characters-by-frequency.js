/**
 * @param {string} s
 * @return {string}
 */
const frequencySort = function (s) {
  return [
    ...s
      .split('')
      .reduce((freq, c) => {
        freq.set(c, (freq.get(c) || 0) + 1);
        return freq;
      }, new Map())
      .entries(),
  ]
    .sort((a, b) => b[1] - a[1])
    .map(([c, count]) => ''.padStart(count, c))
    .join('');
};

console.log(frequencySort('tree') === 'eetr');
console.log(frequencySort('cccaaa') === 'cccaaa');
console.log(frequencySort('Aabb') === 'bbAa');
