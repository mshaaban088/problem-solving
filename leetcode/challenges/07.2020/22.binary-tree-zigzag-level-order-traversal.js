// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3398/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
  const queue = [{ node: root, level: 0 }],
    output = [];

  while (queue.length) {
    const { node, level } = queue.shift();

    if (!node) continue;

    if (!output[level]) {
      output[level] = [];
    }

    if (level % 2 === 0) {
      output[level].push(node.val);
    } else {
      output[level].unshift(node.val);
    }

    const children = [],
      childrenLevel = level + 1;

    children.push({ node: node.left, level: childrenLevel });
    children.push({ node: node.right, level: childrenLevel });

    queue.push(...children);
  }

  return output;
};

/*
Example:

Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its zigzag level order traversal as:
[
  [3],
  [20,9],
  [15,7]
]
*/
const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(zigzagLevelOrder(tree1));

/*
Example:

Given binary tree [1,2,3,4,null,null,5],
    1
   / \
  2   3
 /     \
4       5
return its zigzag level order traversal as:
[
  [1],
  [3,2],
  [4,5]
]
*/

const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4)),
  new TreeNode(3, null, new TreeNode(5))
);
console.log(zigzagLevelOrder(tree2));
