// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3389/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTree = function (p, q) {
  if (!p && !q) return true;
  if (!p || !q || p.val !== q.val) return false;

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

/*
Input:     1         1
          / \       / \
         2   3     2   3

        [1,2,3],   [1,2,3]

Output: true
*/

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(3)),
    new TreeNode(1, new TreeNode(2), new TreeNode(3))
  ) === true
);

/*
Input:     1         1
          /           \
         2             2

        [1,2],     [1,null,2]

Output: false
*/

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2)),
    new TreeNode(1, null, new TreeNode(2))
  ) === false
);

/*
Input:     1         1
          / \       / \
         2   1     1   2

        [1,2,1],   [1,1,2]

Output: false
*/

console.log(
  isSameTree(
    new TreeNode(1, new TreeNode(2), new TreeNode(1)),
    new TreeNode(1, new TreeNode(1), new TreeNode(2))
  ) === false
);
