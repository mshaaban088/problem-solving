/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = {};
  }

  /**
   * Get the final node in a given path (word characters), or null if it doesn't exist
   * @param {TrieNode} parent
   * @param {string} word
   * @return {TrieNode}
   */
  _getIn(parent, word) {
    for (let c of word) {
      if (!parent[c]) {
        return null;
      }
      parent = parent[c];
    }
    return parent;
  }

  /**
   * Inserts a word into the trie.
   * @param {string} word
   * @return {void}
   */
  insert(word) {
    let parent = this.root;

    for (let c of word) {
      parent[c] = parent[c] || {};
      parent = parent[c];
    }

    parent.__isWord = true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this._getIn(this.root, word);
    return node !== null && !!node.__isWord;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this._getIn(this.root, prefix);
    return node !== null;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();

trie.insert('apple');
console.log(trie.search('apple') === true); // returns true
console.log(trie.search('app') === false); // returns false
console.log(trie.startsWith('app') === true); // returns true
trie.insert('app');
console.log(trie.search('app') === true); // returns true

const trie2 = new Trie();

console.log(trie2.search('a') === false); // returns false
