// Problem: https://leetcode.com/problems/merge-two-sorted-lists/description/

const { ListNode, print } = require('./utils/linked-list');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  function merge(left, right) {
    if (!left) return right;
    if (!right) return left;
    if (left.val < right.val) {
      left.next = merge(left.next, right);
      return left;
    } else {
      right.next = merge(left, right.next);
      return right;
    }
  }

  return merge(l1, l2);
};

/*
Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

const l1 = new ListNode(1, new ListNode(2, new ListNode(4)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));

print(mergeTwoLists(l1, l2));

// Check empty list
print(mergeTwoLists());
