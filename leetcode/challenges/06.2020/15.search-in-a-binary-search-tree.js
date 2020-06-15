// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/541/week-3-june-15th-june-21st/3361/

const { TreeNode, print_inorder } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
const searchBST = function (root, val) {
  if (root === null || root.val === val) {
    return root;
  }
  return val < root.val ? searchBST(root.left, val) : searchBST(root.right, val);
};
/*
Input:
        4
       / \
      2   7
     / \
    1   3

value: 2

Output:
      2     
     / \   
    1   3
*/

const tree = new TreeNode(4, new TreeNode(2, new TreeNode(1), new TreeNode(3)), new TreeNode(7));

print_inorder(searchBST(tree, 2)); // [1,2,3]
print_inorder(searchBST(tree, 5)); // []
