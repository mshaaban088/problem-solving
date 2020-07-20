// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3396/

const { ListNode, print } = require('../../utils/linked-list');

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
  if (!head) return head;

  while (head && head.val === val) {
    head = head.next;
  }

  let current = head;

  while (current && current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

/*
Input:  1->2->6->3->4->5->6, val = 6
Output: 1->2->3->4->5
*/

const input = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      6,
      new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
    )
  )
);

print(removeElements(input, 6));
