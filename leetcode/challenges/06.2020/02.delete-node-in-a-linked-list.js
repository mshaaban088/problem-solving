// problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3348/

const { ListNode, print } = require('../../utils/linked-list');
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
  if (node.next != null) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
};

const head = new ListNode(4);
const node5 = new ListNode(5);
head.next = node5;

node5.next = new ListNode(1);
node5.next.next = new ListNode(9);

print(head); // [4,5,1,9]

deleteNode(node5);

print(head); // [4,1,9]
