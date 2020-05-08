class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const findNodeHelper = function (node, val, k, parent) {
  if (node == null) return null;
  if (node.val === val) return [parent, k];
  return findNodeHelper(node.left, val, k + 1, node.val) || findNodeHelper(node.right, val, k + 1, node.val);
};

/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {[number, number]}
 */
const findNode = function (root, val) {
  return findNodeHelper(root, val, 0, root.val);
};

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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
const isCousins = function (root, x, y) {
  const [xParent, xK] = findNode(root, x);
  const [yParent, yK] = findNode(root, y);

  if (!xParent || !yParent || xK !== yK || xParent == yParent) return false;
  return true;
};

const root1 = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
const root2 = new TreeNode(1, new TreeNode(2, undefined, new TreeNode(4)), new TreeNode(3, undefined, new TreeNode(5)));
const root3 = new TreeNode(1, new TreeNode(2, undefined, new TreeNode(4)), new TreeNode(3));

console.log(isCousins(root1, 4, 3) === false);
console.log(isCousins(root2, 5, 4) === true);
console.log(isCousins(root3, 2, 3) === false);
