// Problem: https://leetcode.com/problems/add-two-numbers/description/

const { ListNode, print } = require('./utils/linked-list');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  let remainder = 0;
  let currentNode = new ListNode(-1),
    head = currentNode;

  while (l1 !== null || l2 !== null) {
    let sum = l1 !== null ? l1.val : 0;
    sum += l2 !== null ? l2.val : 0;
    sum += remainder;

    const node = new ListNode(sum % 10);
    remainder = Math.floor(sum / 10);

    currentNode.next = node;
    currentNode = node;

    l1 = l1 !== null ? l1.next : null;
    l2 = l2 !== null ? l2.next : null;
  }

  if (remainder > 0) {
    currentNode.next = new ListNode(remainder);
  }

  return head.next;
};

/*
Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807
*/

let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

print(addTwoNumbers(l1, l2));

/*
Input: (5) + (9 -> 9 -> 9)
Output: 4 -> 0 -> 0 -> 1
Explanation: 5 + 999 = 1004
*/

l1 = new ListNode(5);
l2 = new ListNode(9, new ListNode(9, new ListNode(9)));
print(addTwoNumbers(l1, l2));
