class TrieNode {
  constructor(c) {
    this.c = c;
    this.isWord = false;
    this.children = new Map();
  }
}

/**
 * Initialize your data structure here.
 */
class Trie {
  constructor() {
    this.root = new TrieNode(null);
  }

  /**
   * Insert the character c in the given node if it exists, otherwise return it
   * @param {TrieNode} node
   * @param {string} c
   * @return {}
   */
  _insertOrGet(parent, c) {
    if (!parent.children.has(c)) {
      const newNode = new TrieNode(c);
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
    return word.split('').reduce((node, c) => {
      return node && node.children.has(c) && node.children.get(c);
    }, parent);
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
    return node && node.isWord;
  }

  /**
   * Returns if there is any word in the trie that starts with the given prefix.
   * @param {string} prefix
   * @return {boolean}
   */
  startsWith(prefix) {
    const node = this._getIn(this.root, prefix);
    return !!node;
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
