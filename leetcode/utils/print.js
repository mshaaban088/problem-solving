function ListNode(val) {
  this.val = val;
  this.next = null;
}

module.exports = {};

/**
 * @param {ListNode} node
 * @return {void} Do not return anything.
 */
module.exports.printLinkedList = (node) => {
  let current = node;
  const out = [];
  while (current != null) {
    out.push(current.val);
    current = current.next;
  }
  console.log(out);
};
