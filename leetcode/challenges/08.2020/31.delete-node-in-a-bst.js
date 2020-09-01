// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/553/week-5-august-29th-august-31st/3443/

const { TreeNode, print_inorder } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  function findNextSuccessor(node) {
    let successor = node.val;

    while (node.left !== null) {
      successor = node.left.val;
      node = node.left;
    }
    return successor;
  }

  function deleteNodeHelper(node, key) {
    if (node === null) return node;
    if (key < node.val) {
      node.left = deleteNodeHelper(node.left, key);
    } else if (key > node.val) {
      node.right = deleteNodeHelper(node.right, key);
    } else {
      if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        node.val = findNextSuccessor(node.right);
        node.right = deleteNodeHelper(node.right, node.val);
      }
    }
    return node;
  }

  return deleteNodeHelper(root, key);
};

/*
    5
   / \
  3   6
 / \   \
2   4   7
*/

print_inorder(
  deleteNode(
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    ),
    3
  )
);

print_inorder(
  deleteNode(
    new TreeNode(
      5,
      new TreeNode(3, new TreeNode(2), new TreeNode(4)),
      new TreeNode(6, null, new TreeNode(7))
    ),
    0
  )
);

print_inorder(deleteNode(new TreeNode(0), 0));
