// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/555/week-2-september-8th-september-14th/3453/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumRootToLeaf = function (root, digits = '') {
  if (!root) return 0;

  digits += root.val;

  if (!root.left && !root.right) return parseInt(digits, 2);

  return sumRootToLeaf(root.left, digits) + sumRootToLeaf(root.right, digits);
};

[1, 0, 1, 0, 1, 0, 1];

const tree1 = new TreeNode(
  1,
  new TreeNode(0, new TreeNode(0), new TreeNode(1)),
  new TreeNode(1, new TreeNode(0), new TreeNode(1))
);

console.log(sumRootToLeaf(tree1) === 22);
