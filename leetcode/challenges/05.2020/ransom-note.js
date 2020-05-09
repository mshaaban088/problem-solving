const getFrequencyMap = function (str) {
  return str.split('').reduce((freqMap, ch) => {
    if (freqMap.has(ch)) {
      freqMap.set(ch, freqMap.get(ch) + 1);
    } else {
      freqMap.set(ch, 1);
    }
    return freqMap;
  }, new Map());
};

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = function (ransomNote, magazine) {
  const ransomFreqMap = getFrequencyMap(ransomNote);
  const magazineFreqMap = getFrequencyMap(magazine);

  for (let [ch, freq] of ransomFreqMap) {
    if (!magazineFreqMap.has(ch) || magazineFreqMap.get(ch) < freq) {
      return false;
    }
  }
  return true;
};

console.log(canConstruct('a', 'b') === false);
console.log(canConstruct('aa', 'ab') === false);
console.log(canConstruct('aa', 'aab') === true);
console.log(canConstruct('bg', 'efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj') === true);
