module.exports = {};

module.exports.TreeNode = function (val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
};

/**
 * Print a given tree in-order
 * @param {TreeNode} node
 * @return {void} Do not return anything.
 */
module.exports.print_inorder = function (node) {
  const out = [];
  function printHelper(node) {
    if (node === null) {
      return;
    }
    if (node.left !== null) {
      printHelper(node.left);
    }
    out.push(node.val);
    if (node.right !== null) {
      printHelper(node.right);
    }
  }

  printHelper(node);
  console.log(out);
};
