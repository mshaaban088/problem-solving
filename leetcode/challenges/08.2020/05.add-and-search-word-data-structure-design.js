// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3413/

class WordDictionary {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.root = {};
  }

  /**
   * Adds a word into the data structure.
   * @param {string} word
   * @return {void}
   */
  addWord(word) {
    let parent = this.root;

    for (const c of word) {
      parent[c] = parent[c] || {};
      parent = parent[c];
    }

    Object.defineProperty(parent, '__word', {
      value: true,
    });
  }

  /**
   * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    function searchHelper(word, parent) {
      for (let i = 0; i < word.length; i++) {
        const c = word[i];
        if (c !== '.' && !parent[c]) return false;
        if (c === '.') {
          for (const cc of Object.keys(parent)) {
            if (searchHelper(word.substring(i + 1), parent[cc])) return true;
          }
          return false;
        }
        parent = parent[c];
      }

      return !!parent.__word;
    }

    return searchHelper(word, this.root);
  }
}

let dict = new WordDictionary();

dict.addWord('a');
dict.addWord('a');

console.log(dict.search('.') === true);
console.log(dict.search('a') === true);
console.log(dict.search('aa') === false);
console.log(dict.search('.') === true);
console.log(dict.search('a') === true);
console.log(dict.search('.a') === false);
console.log(dict.search('a.') === false);

console.log('---------------------------');

dict = new WordDictionary();

dict.addWord('bad');
dict.addWord('dad');
dict.addWord('mad');

console.log(dict.search('pad') === false);
console.log(dict.search('bad') === true);
console.log(dict.search('.ad') === true);
console.log(dict.search('b..') === true);

console.log('---------------------------');

dict = new WordDictionary();

dict.addWord('at');
dict.addWord('and');
dict.addWord('an');
dict.addWord('add');
console.log(dict.search('a') === false);
console.log(dict.search('.at') === false);
dict.addWord('bat');
console.log(dict.search('.at') === true);
console.log(dict.search('an.') === true);
console.log(dict.search('a.d.') === false);
console.log(dict.search('b.') === false);
console.log(dict.search('a.d') === true);
console.log(dict.search('.') === false);
