/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
  function createTree(min, max) {
    if (!preorder.length || preorder[0] < min || preorder[0] > max) {
      return null;
    }

    const rootValue = preorder.shift();
    return new TreeNode(rootValue, createTree(min, rootValue), createTree(rootValue, max));
  }

  return createTree(Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

console.log(bstFromPreorder([8, 5, 1, 7, 10, 12])); // [8, 5, 10, 1, 7, null, 12]
