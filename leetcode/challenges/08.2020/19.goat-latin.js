// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3429/

/**
 * @param {string} S
 * @return {string}
 */
const toGoatLatin = function (S) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return S.split(' ')
    .map((word, i) => {
      if (vowels.includes(word[0].toLowerCase())) {
        return `${word}ma${'a'.repeat(i + 1)}`;
      }
      return `${word.slice(1)}${word[0]}ma${'a'.repeat(i + 1)}`;
    })
    .join(' ');
};

console.log(
  toGoatLatin('I speak Goat Latin') === 'Imaa peaksmaaa oatGmaaaa atinLmaaaaa'
);
console.log(
  toGoatLatin('The quick brown fox jumped over the lazy dog') ===
    'heTmaa uickqmaaa rownbmaaaa oxfmaaaaa umpedjmaaaaaa overmaaaaaaa hetmaaaaaaaa azylmaaaaaaaaa ogdmaaaaaaaaaa'
);
