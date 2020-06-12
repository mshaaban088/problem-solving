module.exports = {};

module.exports.ListNode = function (val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

/**
 * @param {ListNode} node
 * @return {void} Do not return anything.
 */
module.exports.print = function (node) {
  let current = node;
  const out = [];
  while (current != null) {
    out.push(current.val);
    current = current.next;
  }
  console.log(out);
};
