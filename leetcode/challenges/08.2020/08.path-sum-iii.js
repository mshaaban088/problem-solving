// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3417/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} node
 * @param {number} sum
 * @return {number}
 */
function dfs(node, sum) {
  if (node === null) return 0;
  let count = node.val === sum ? 1 : 0;
  count += dfs(node.left, sum - node.val);
  count += dfs(node.right, sum - node.val);
  return count;
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
const pathSum = function (root, sum) {
  if (root === null) return 0;
  let count = dfs(root, sum);
  count += pathSum(root.left, sum);
  count += pathSum(root.right, sum);
  return count;
};

/*
root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
*/

const tree = new TreeNode(
  10,
  new TreeNode(
    5,
    new TreeNode(3, new TreeNode(3), new TreeNode(-2)),
    new TreeNode(2, null, new TreeNode(1))
  ),
  new TreeNode(-3, null, new TreeNode(11))
);
console.log(pathSum(tree, 8) === 3);
