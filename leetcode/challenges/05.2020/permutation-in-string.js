/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
  if (s1.length > s2.length) {
    return false;
  }

  const s1Counts = Array(26).fill(0);
  for (let i = 0; i < s1.length; i++) {
    s1Counts[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++;
  }

  for (let i = 0; i < s2.length - s1.length + 1; i++) {
    const windowCount = Array(26).fill(0);

    for (let j = i; j < i + s1.length; j++) {
      windowCount[s2.charCodeAt(j) - 'a'.charCodeAt(0)]++;
    }

    let nSimilarities = 0;

    for (let j = 0; j < s1Counts.length; j++) {
      if (s1Counts[j] === windowCount[j]) {
        nSimilarities++;
      }
    }

    if (nSimilarities === s1Counts.length) {
      return true;
    }
  }

  return false;
};

console.log(checkInclusion('ab', 'eidbaooo') === true);
console.log(checkInclusion('ab', 'eidboaoo') === false);
