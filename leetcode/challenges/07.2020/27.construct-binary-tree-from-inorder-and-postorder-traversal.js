// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3403/

const { TreeNode, print_inorder } = require('../../utils/tree');

/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const buildTree = function (inorder, postorder) {
  const inorderIndexes = {};
  let postIndex = postorder.length - 1;

  for (let i = 0; i < inorder.length; i++) {
    inorderIndexes[inorder[i]] = i;
  }

  function buildTreeHelper(inStart, inEnd) {
    if (inStart > inEnd) return null;

    const parent = postorder[postIndex];
    const node = new TreeNode(parent);
    postIndex--;
    if (inStart === inEnd) return node;

    const parentIndex = inorderIndexes[parent];

    node.right = buildTreeHelper(parentIndex + 1, inEnd);
    node.left = buildTreeHelper(inStart, parentIndex - 1);

    return node;
  }

  return buildTreeHelper(0, inorder.length - 1);
};

/*
    3
   / \
  9  20
    /  \
   15   7
*/

print_inorder(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3]));
