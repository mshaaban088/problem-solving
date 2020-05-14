class TrieNode {
  constructor() {
    this.isWord = false;
    this.children = new Map();
  }
}

/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  /**
   * Insert the character c in the given node if it exists, otherwise return it
   * @param {TrieNode} node
   * @param {string} c
   * @return {}
   */
  _insertOrGet(parent, c) {
    if (!parent.children.has(c)) {
      const newNode = new TrieNode();
      parent.children.set(c, newNode);
    }
    return parent.children.get(c);
  }

  /**
   * Get the final node in a given path (word characters), or null if it doesn't exist
   * @param {TrieNode} parent
   * @param {string} word
   * @return {TrieNode}
   */
  _getIn(parent, word) {
    for (let c of word) {
      if (!parent || !parent.children.has(c)) {
        return null;
      }
      parent = parent.children.get(c);
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

    for (let i = 0; i < word.length; i++) {
      parent = this._insertOrGet(parent, word[i]);
    }

    parent.isWord = true;
  }

  /**
   * Returns if the word is in the trie.
   * @param {string} word
   * @return {boolean}
   */
  search(word) {
    const node = this._getIn(this.root, word);
    return node !== null && node.isWord;
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
