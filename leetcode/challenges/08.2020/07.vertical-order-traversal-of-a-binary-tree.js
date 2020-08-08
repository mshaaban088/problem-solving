// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3415/

const { TreeNode } = require('../../utils/tree');

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function (root) {
  const map = new Map();
  const queue = [[root, 0, 0]];
  let minX = Number.MAX_VALUE,
    maxX = Number.MIN_VALUE;

  while (queue.length) {
    const [node, x, y] = queue.shift();

    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);

    if (!map.has(x)) {
      map.set(x, []);
    }
    map.get(x).push([node.val, y]);

    if (node.left !== null) {
      queue.push([node.left, x - 1, y - 1]);
    }
    if (node.right !== null) {
      queue.push([node.right, x + 1, y - 1]);
    }
  }

  const output = [];
  for (let i = minX; i <= maxX; i++) {
    // If two values are on the same y-level, sort values asc
    const hLevel = map.get(i).sort((a, b) => {
      if (a[1] === b[1]) return a[0] - b[0];
      return 0;
    });
    output.push(hLevel.map(([val]) => val));
  }
  return output;
};

/*
Input: [3,9,20,null,null,15,7]
Output: [[9],[3,15],[20],[7]]
Explanation: 
Without loss of generality, we can assume the root node is at position (0, 0):
Then, the node with value 9 occurs at position (-1, -1);
The nodes with values 3 and 15 occur at positions (0, 0) and (0, -2);
The node with value 20 occurs at position (1, -1);
The node with value 7 occurs at position (2, -2).
*/

const tree1 = new TreeNode(
  3,
  new TreeNode(9),
  new TreeNode(20, new TreeNode(15), new TreeNode(7))
);
console.log(verticalTraversal(tree1)); // [[9], [3, 15], [20], [7]]

/*
Input: [1,2,3,4,5,6,7]
Output: [[4],[2],[1,5,6],[3],[7]]
Explanation: 
The node with value 5 and the node with value 6 have the same position according to the given scheme.
However, in the report "[1,5,6]", the node value of 5 comes first since 5 is smaller than 6.
*/

const tree2 = new TreeNode(
  1,
  new TreeNode(2, new TreeNode(4), new TreeNode(5)),
  new TreeNode(3, new TreeNode(6), new TreeNode(7))
);
console.log(verticalTraversal(tree2)); // [[4], [2], [1, 5, 6], [3], [7]]

const tree3 = new TreeNode(
  0,
  new TreeNode(8),
  new TreeNode(
    1,
    new TreeNode(3, null, new TreeNode(4, null, new TreeNode(7))),
    new TreeNode(2, new TreeNode(5, new TreeNode(6)))
  )
);
console.log(verticalTraversal(tree3)); // [[8], [0, 3, 6], [1, 4, 5], [2, 7]]

const tree4 = new TreeNode(
  0,
  new TreeNode(
    2,
    new TreeNode(
      3,
      new TreeNode(4, null, new TreeNode(7, new TreeNode(10), new TreeNode(8))),
      new TreeNode(5, new TreeNode(6, new TreeNode(11), new TreeNode(9)))
    )
  ),
  new TreeNode(1)
);
console.log(verticalTraversal(tree4)); // [[4,10,11],[3,6,7],[2,5,8,9],[0],[1]]
