// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3435/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
  let sum = 0;

  function sumOfLeftLeavesHelper(node) {
    if (node === null) return;
    sumOfLeftLeavesHelper(node.left);
    sumOfLeftLeavesHelper(node.right);

    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val;
    }
  }

  sumOfLeftLeavesHelper(root);

  return sum;
};

/*
Input:
    3
   / \
  9  20
    /  \
   15   7

Output:
24

There are two left leaves in the binary tree, with values 9 and 15 respectively. Return 24.
*/

const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);

console.log(sumOfLeftLeaves(tree1) === 24);

const tree2 = new TreeNode(
  0,
  new TreeNode(2, new TreeNode(1, new TreeNode(5), new TreeNode(1))),
  new TreeNode(
    4,
    new TreeNode(3, null, new TreeNode(6)),
    new TreeNode(-1, null, new TreeNode(8))
  )
);

console.log(sumOfLeftLeaves(tree2) === 5);
