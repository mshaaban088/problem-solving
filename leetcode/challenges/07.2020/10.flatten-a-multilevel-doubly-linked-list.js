// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3386/

const { Node, print } = require('../../utils/doubly-linked-list');

/**
 * @param {Node} head
 * @return {Node}
 */
const flatten = function (head) {
  function flattenHelper(node) {
    const head = node;
    let current = node,
      tail;

    while (current) {
      if (current.child) {
        const { head: childHead, tail: childTail } = flattenHelper(
          current.child
        );

        current.child = null;
        childTail.next = current.next;

        if (current.next) {
          current.next.prev = childTail;
        }

        current.next = childHead;
        childHead.prev = current;

        current = childTail;
      }

      tail = current;
      current = current.next;

      if (current) {
        current.prev = tail;
      }
    }

    return { head, tail };
  }

  return flattenHelper(head).head;
};

/*
Input: head = [1,2,3,4,5,6,null,null,null,7,8,9,10,null,null,11,12]
Output: [1,2,3,7,8,11,12,9,10,4,5,6]
*/

const head = new Node(1);
head.next = new Node(2);

const node3 = new Node(3);
node3.child = new Node(7);

const node8 = new Node(8);
node8.child = new Node(11);
node8.child.next = new Node(12);

node3.child.next = node8;
node3.child.next.next = new Node(9);
node3.child.next.next.next = new Node(10);

head.next.next = node3;
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);

print(flatten(head));

/*
Input: head = [1,2,null,3]
Output: [1,3,2]
*/
const head2 = new Node(1);
head2.child = new Node(3);
head2.next = new Node(2);

print(flatten(head2));

/*
Input: head = []
Output: []
*/

print(flatten(null));
