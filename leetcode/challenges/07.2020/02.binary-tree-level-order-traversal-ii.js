// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/544/week-1-july-1st-july-7th/3378/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
  const levels = [];

  function levelOrderBottomHelper(node, level) {
    if (node === null) return;

    levels[level] = (levels[level] || []).concat(node.val);

    levelOrderBottomHelper(node.left, level + 1);
    levelOrderBottomHelper(node.right, level + 1);
  }

  levelOrderBottomHelper(root, 0);

  return levels.reverse();
};

/*
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
*/

console.log(
  levelOrderBottom(
    new TreeNode(
      3,
      new TreeNode(9),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);

/*
For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
 / \ /  \
1  4 15  7
return its bottom-up level order traversal as:
[
  [1,4,15,7],
  [9,20],
  [3]
]
*/

console.log(
  levelOrderBottom(
    new TreeNode(
      3,
      new TreeNode(9, new TreeNode(1), new TreeNode(4)),
      new TreeNode(20, new TreeNode(15), new TreeNode(7))
    )
  )
);
