// Problem: https://leetcode.com/explore/challenge/card/june-leetcoding-challenge/542/week-4-june-22nd-june-28th/3372/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function (root, sum = 0) {
  if (root === null) return 0;

  const currentSum = sum * 10 + root.val;
  const leftSum = sumNumbers(root.left, currentSum);
  const rightSum = sumNumbers(root.right, currentSum);
  const totalSum = leftSum + rightSum;

  return totalSum !== 0 ? totalSum : currentSum;
};

/*
Input: [1,2,3]
    1
   / \
  2   3
Output: 25
*/

const tree1 = new TreeNode(1, new TreeNode(2), new TreeNode(3));
console.log(sumNumbers(tree1) === 25);

/*
Input: [2,0,0]
    2
   / \
  0   0
Output: 40
*/

const tree2 = new TreeNode(2, new TreeNode(0), new TreeNode(0));

console.log(sumNumbers(tree2) === 40);

/*
Input: [4,9,0,5,1]
    4
   / \
  9   0
 / \
5   1
Output: 1026
*/

const tree3 = new TreeNode(
  4,
  new TreeNode(9, new TreeNode(5), new TreeNode(1)),
  new TreeNode(0)
);
console.log(sumNumbers(tree3) === 1026);
