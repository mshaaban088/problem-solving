module.exports = {};

module.exports.Node = function (val, prev, next, child) {
  this.val = val;
  this.prev = prev;
  this.next = next;
  this.child = child;
};

/**
 * @param {Node} node
 * @return {void} Do not return anything.
 */
module.exports.print = function (node) {
  let current = node;
  const out = [];
  while (current != null) {
    const data = {
      val: current.val,
    };

    if (current.next) {
      data.next = current.next.val;
    }
    if (current.prev) {
      data.prev = current.prev.val;
    }

    out.push(data);

    current = current.next;
  }
  console.log(out);
};
