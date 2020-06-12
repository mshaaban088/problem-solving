// Problem: https://leetcode.com/problems/merge-k-sorted-lists/description/

const { ListNode, print } = require('./utils/linked-list');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists_oneByOne = function (lists) {
  let current = new ListNode(0),
    head = current;

  while (true) {
    let min = Number.POSITIVE_INFINITY;
    let minIndex = -1;

    for (let i = 0; i < lists.length; i++) {
      if (lists[i] && lists[i].val < min) {
        min = lists[i].val;
        minIndex = i;
      }
    }

    if (minIndex === -1) {
      break;
    }

    current.next = lists[minIndex];
    current = lists[minIndex];

    lists[minIndex] = lists[minIndex].next;
  }

  return head.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists_divideAndConquer = function (lists) {
  function conquer(left, right) {
    if (!left) return right;
    if (!right) return left;
    if (left.val < right.val) {
      left.next = conquer(left.next, right);
      return left;
    } else {
      right.next = conquer(left, right.next);
      return right;
    }
  }

  function divide(lists, start, end) {
    if (start === end) {
      return lists[start];
    } else if (start < end) {
      const mid = (start + end) >> 1;
      const left = divide(lists, start, mid);
      const right = divide(lists, mid + 1, end);
      return conquer(left, right);
    }
    return null;
  }

  return divide(lists, 0, lists.length - 1);
};

const mergeKLists = mergeKLists_divideAndConquer;

/*
Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

const l1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const l2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const l3 = new ListNode(2, new ListNode(6));

print(mergeKLists([l1, l2, l3]));

// Check empty list
print(mergeKLists([]));
