function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {Object}
 */
const getInfo = function (head) {
  let length = 0;
  let tail = null;
  while (head !== null) {
    length++;
    tail = head;
    head = head.next;
  }
  return { length, tail };
};

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const oddEvenList = function (head) {
  let { length, tail } = getInfo(head);

  if (length < 3) {
    return head;
  }

  let i = 0;
  let mid = Math.floor(length / 2);
  let odd = head;
  let even = odd.next;

  while (i++ < mid) {
    // remove even
    odd.next = even.next;

    // add even at the end of the list
    even.next = null;
    tail.next = even;
    tail = even;

    // advance odd
    odd = odd.next;

    // advance even
    even = odd.next;
  }

  return head;
};

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const toString = function (head) {
  const out = [];
  while (head !== null) {
    out.push(head.val);
    head = head.next;
  }
  out.push('NULL');
  return out.join('->');
};

const list1 = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
const list2 = new ListNode(
  2,
  new ListNode(1, new ListNode(3, new ListNode(5, new ListNode(6, new ListNode(4, new ListNode(7))))))
);

console.log(toString(oddEvenList(list1)) === '1->3->5->2->4->NULL');
console.log(toString(oddEvenList(list2)) === '2->3->6->7->1->5->4->NULL');
