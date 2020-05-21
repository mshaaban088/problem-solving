function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

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
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
  let smallest;

  function inorderTraverse(node) {
    if (node === null) {
      return;
    }
    inorderTraverse(node.left);
    k--;

    if (k === 0) {
      smallest = node.val;
      return;
    }

    inorderTraverse(node.right);
  }

  inorderTraverse(root);
  return smallest;
};

// [3,1,4,null,2], k = 1 => 1
// [5,3,6,2,4,null,null,1], k = 3 => 3

const root1 = new TreeNode(3, new TreeNode(1, undefined, new TreeNode(2)), new TreeNode(4));

console.log(kthSmallest(root1, 1) === 1);

const root2 = new TreeNode(
  5,
  new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
  new TreeNode(6, undefined, undefined)
);

console.log(kthSmallest(root2, 3) === 3);
