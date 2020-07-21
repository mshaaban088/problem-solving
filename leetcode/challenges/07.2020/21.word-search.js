// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3397/

class Trie {
  constructor() {
    this.root = {};
  }

  insert(word) {
    let parent = this.root;

    for (const c of word) {
      parent[c] = parent[c] || {};
      parent = parent[c];
    }

    parent.__word = word;
  }
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const N = board.length,
    M = board[0].length,
    visited = Array(N);

  function dfs(parent, i, j) {
    if (
      i < 0 ||
      i >= N ||
      j < 0 ||
      j >= M ||
      visited[i][j] ||
      !parent ||
      !parent[board[i][j]]
    ) {
      return false;
    }

    const node = parent[board[i][j]];

    if (node.__word) {
      return true;
    }

    visited[i][j] = true;

    const isWordFound =
      dfs(node, i, j - 1) ||
      dfs(node, i, j + 1) ||
      dfs(node, i - 1, j) ||
      dfs(node, i + 1, j);

    visited[i][j] = false;

    return isWordFound;
  }

  for (let i = 0; i < N; i++) {
    visited[i] = Array(M).fill(false);
  }

  const trie = new Trie();
  trie.insert(word);

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (dfs(trie.root, i, j)) {
        return true;
      }
    }
  }

  return false;
};

console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCCED'
  ) === true
);
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'SEE'
  ) === true
);
console.log(
  exist(
    [
      ['A', 'B', 'C', 'E'],
      ['S', 'F', 'C', 'S'],
      ['A', 'D', 'E', 'E'],
    ],
    'ABCB'
  ) === false
);
