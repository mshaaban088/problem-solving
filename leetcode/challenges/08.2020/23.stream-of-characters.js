// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3434/

class StreamChecker {
  /**
   * @param {string[]} words
   */
  constructor(words) {
    this.root = {};

    for (const word of words) {
      let root = this.root;
      for (let i = word.length - 1; i >= 0; i--) {
        const c = word[i];
        root[c] = root[c] || {};
        root = root[c];
      }

      root.__isWord = true;
    }

    this.lastQuery = {};
  }
  /**
   * @param {character} letter
   * @return {boolean}
   */
  query(letter) {
    this.lastQuery += letter;
    let parent = this.root;

    for (let i = this.lastQuery.length - 1; i >= 0; i--) {
      parent = parent[this.lastQuery[i]];
      if (!parent) return false;
      if (parent.__isWord) return true;
    }
    return false;
  }
}

const streamChecker = new StreamChecker(['cd', 'f', 'kl']);

console.log(streamChecker.query('a') === false); // return false
console.log(streamChecker.query('b') === false); // return false
console.log(streamChecker.query('c') === false); // return false
console.log(streamChecker.query('d') === true); // return true, because 'cd' is in the wordlist
console.log(streamChecker.query('e') === false); // return false
console.log(streamChecker.query('f') === true); // return true, because 'f' is in the wordlist
console.log(streamChecker.query('g') === false); // return false
console.log(streamChecker.query('h') === false); // return false
console.log(streamChecker.query('i') === false); // return false
console.log(streamChecker.query('j') === false); // return false
console.log(streamChecker.query('k') === false); // return false
console.log(streamChecker.query('l') === true); // return true, because 'kl' is in the wordlist

const streamChecker2 = new StreamChecker(['ab', 'ba', 'aaab', 'abab', 'baa']);

console.log(streamChecker2.query('a') === false);
console.log(streamChecker2.query('a') === false);
console.log(streamChecker2.query('a') === false);
console.log(streamChecker2.query('a') === false);
console.log(streamChecker2.query('a') === false);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('b') === false);
console.log(streamChecker2.query('b') === false);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('b') === false);
console.log(streamChecker2.query('b') === false);
console.log(streamChecker2.query('b') === false);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('a') === false);
console.log(streamChecker2.query('b') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('a') === true);
console.log(streamChecker2.query('a') === false);
