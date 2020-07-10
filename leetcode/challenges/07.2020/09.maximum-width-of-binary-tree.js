// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3385/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = function (root) {
  const mins = [0];
  let maxWidth = 0;

  function dfs(node, level, nodeNumber) {
    if (!node) return;
    if (level === mins.length) {
      mins[level] = nodeNumber;
    }

    const diff = nodeNumber - mins[level];
    maxWidth = Math.max(maxWidth, diff + 1);
    dfs(node.left, level + 1, diff * 2);
    dfs(node.right, level + 1, diff * 2 + 1);
  }

  dfs(root, 0, 0);
  return maxWidth;
};

/*
Input:
           1
         /   \
        3     2
       / \     \
      5   3     9

Output: 4
Explanation: The maximum width existing in the third level with the length 4 (5,3,null,9).
*/

const root1 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5), new TreeNode(3)),
  new TreeNode(2, null, new TreeNode(9))
);

console.log(widthOfBinaryTree(root1));

/*
Input:

          1
         /
        3
       / \
      5   3

Output: 2
Explanation: The maximum width existing in the third level with the length 2 (5,3).
*/

const root2 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5), new TreeNode(3))
);

console.log(widthOfBinaryTree(root2));

/*
Input:

          1
         / \
        3   2
       /
      5

Output: 2
Explanation: The maximum width existing in the second level with the length 2 (3,2).
*/

const root3 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5)),
  new TreeNode(2)
);

console.log(widthOfBinaryTree(root3));

/*
Input:

          1
         / \
        3   2
       /     \
      5       9
     /         \
    6           7
Output: 8
Explanation:The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).
*/

const root4 = new TreeNode(
  1,
  new TreeNode(3, new TreeNode(5, new TreeNode(6))),
  new TreeNode(2, null, new TreeNode(9, null, new TreeNode(7)))
);

console.log(widthOfBinaryTree(root4));
