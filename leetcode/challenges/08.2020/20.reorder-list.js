// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3430/

const { ListNode, print } = require('../../utils/linked-list');

/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
  const arr = [];
  let current = head;

  while (current !== null) {
    arr.push(current);
    current = current.next;
  }

  let left = 0,
    right = arr.length - 1;

  while (left <= right) {
    arr[left].next = arr[right];
    arr[right].next = arr[left + 1];
    left++;
    right--;
  }
  if (arr.length > 0) {
    arr[right + 1].next = null;
  }
};

/*
  Given 1->2->3->4, reorder it to 1->4->2->3
*/
const list1 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4)))
);
reorderList(list1);

print(list1); // 1->4->2->3

/*
  Given 1->2->3->4->5, reorder it to 1->5->2->4->3.
*/
const list2 = new ListNode(
  1,
  new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
);
reorderList(list2);
print(list2); // 1->5->2->4->3
