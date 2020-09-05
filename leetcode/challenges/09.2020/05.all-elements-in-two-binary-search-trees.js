// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3449/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
const getAllElements = function (root1, root2) {
  function traverseInOrder(node, out) {
    if (node === null) return;
    traverseInOrder(node.left, out);
    out.push(node.val);
    traverseInOrder(node.right, out);
  }

  function mergeInOrder(list1, list2) {
    let idx = 0,
      idx1 = 0,
      idx2 = 0,
      n1 = list1.length,
      n2 = list2.length;
    const merged = Array(n1 + n2);

    while (idx1 < n1 && idx2 < n2) {
      merged[idx++] = list1[idx1] < list2[idx2] ? list1[idx1++] : list2[idx2++];
    }

    while (idx1 < n1) {
      merged[idx++] = list1[idx1++];
    }

    while (idx2 < n2) {
      merged[idx++] = list2[idx2++];
    }

    return merged;
  }

  const list1 = [],
    list2 = [];

  traverseInOrder(root1, list1);
  traverseInOrder(root2, list2);
  return mergeInOrder(list1, list2);
};

const example1Root1 = new TreeNode(2, new TreeNode(1), new TreeNode(4));
const example1Root2 = new TreeNode(1, new TreeNode(0), new TreeNode(3));

console.log(
  getAllElements(example1Root1, example1Root2).toString() ===
    [0, 1, 1, 2, 3, 4].toString()
);

const example2Root1 = new TreeNode(0, new TreeNode(-10), new TreeNode(10));
const example2Root2 = new TreeNode(
  5,
  new TreeNode(1, new TreeNode(0), new TreeNode(2)),
  new TreeNode(7)
);

console.log(
  getAllElements(example2Root1, example2Root2).toString() ===
    [-10, 0, 0, 1, 2, 5, 7, 10].toString()
);

const example3Root1 = null;
const example3Root2 = new TreeNode(
  5,
  new TreeNode(1, new TreeNode(0), new TreeNode(2)),
  new TreeNode(7)
);

console.log(
  getAllElements(example3Root1, example3Root2).toString() ===
    [0, 1, 2, 5, 7].toString()
);

const example4Root1 = new TreeNode(0, new TreeNode(-10), new TreeNode(10));
const example4Root2 = null;

console.log(
  getAllElements(example4Root1, example4Root2).toString() ===
    [-10, 0, 10].toString()
);

const example5Root1 = new TreeNode(1, null, new TreeNode(8));
const example5Root2 = new TreeNode(8, new TreeNode(1));

console.log(
  getAllElements(example5Root1, example5Root2).toString() ===
    [1, 1, 8, 8].toString()
);
