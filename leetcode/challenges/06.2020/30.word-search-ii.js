// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/543/week-5-june-29th-june-30th/3376/

class Trie {
  constructor() {
    this.root = {};
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

    parent.__word = word;
  }
}

/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (!board.length || !board[0].length || !words.length) return [];

  const N = board.length,
    M = board[0].length,
    foundWords = [];

  function isValidMove(i, j, visited) {
    return i >= 0 && i < N && j >= 0 && j < M && !visited[i][j];
  }

  function dfs(root, i, j, visited, result) {
    const c = board[i][j];

    if (!root || !root[c] || visited[i][j]) {
      return;
    }

    const node = root[c];

    if (node.__word) {
      console.log(`Found: ${node.__word}`);
      result.push(node.__word);

      // avoid duplicate words
      node.__word = null;
    }

    visited[i][j] = true;

    // Move up
    if (isValidMove(i - 1, j, visited)) {
      dfs(node, i - 1, j, visited, result);
    }

    // Move down
    if (isValidMove(i + 1, j, visited)) {
      dfs(node, i + 1, j, visited, result);
    }

    // Move left
    if (isValidMove(i, j - 1, visited)) {
      dfs(node, i, j - 1, visited, result);
    }

    // Move right
    if (isValidMove(i, j + 1, visited)) {
      dfs(node, i, j + 1, visited, result);
    }

    visited[i][j] = false;
  }

  const visited = Array(N),
    trie = new Trie();

  for (let i = 0; i < N; i++) {
    visited[i] = Array(M).fill(false);
  }

  for (const word of words) {
    trie.insert(word);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      dfs(trie.root, i, j, visited, foundWords);
    }
  }

  console.log(foundWords);

  return foundWords;
};

/*
Input: 
board = [
  ['o','a','a','n'],
  ['e','t','a','e'],
  ['i','h','k','r'],
  ['i','f','l','v']
]
words = ["oath","pea","eat","rain"]

Output: ["eat","oath"]
*/

console.log(
  findWords(
    [
      ['o', 'a', 'a', 'n'],
      ['e', 't', 'a', 'e'],
      ['i', 'h', 'k', 'r'],
      ['i', 'f', 'l', 'v'],
    ],
    ['oath', 'pea', 'eat', 'rain']
  ).toString() === ['eat', 'oath'].toString()
);

console.log(
  findWords(
    [
      ['a', 'b'],
      ['a', 'a'],
    ],
    ['aba', 'baa', 'bab', 'aaab', 'aaa', 'aaaa', 'aaba']
  )
); // ["aaa","aaab","aaba","aba","baa"]
