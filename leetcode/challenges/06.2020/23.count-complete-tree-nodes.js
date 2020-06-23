// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3369/

const { TreeNode } = require('../../utils/tree');

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
  if (root === null) {
    return 0;
  }

  return 1 + countNodes(root.left) + countNodes(root.right);
};

/*
Input: 
    1
   / \
  2   3
 / \  /
4  5 6

Output: 6
*/

const tree = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6))
);

console.log(countNodes(tree) === 6);
