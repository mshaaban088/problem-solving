/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function (strs) {
  const anagrams = strs.reduce((all, str) => {
    const anagram = str.split('').sort().join('');

    if (!all.has(anagram)) {
      all.set(anagram, []);
    }
    all.get(anagram).push(str);
    return all;
  }, new Map());

  return [...anagrams.values()];
};

/*
[
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]
*/
console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
