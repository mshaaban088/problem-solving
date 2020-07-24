// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/547/week-4-july-22nd-july-28th/3400/

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function (graph) {
  const paths = [];

  function dfs(source, target, path) {
    if (!source in graph) return;
    if (source === target) {
      paths.push(path);
      return;
    }

    graph[source].forEach((node) => dfs(node, target, [...path, node]));
  }

  dfs(0, graph.length - 1, [0]);

  return paths;
};

/*
Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
*/

console.log(allPathsSourceTarget([[1, 2], [3], [3], []])); // [[0,1,3],[0,2,3]]
