// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/546/week-3-july-15th-july-21st/3394/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
const findOrder = function (numCourses, prerequisites) {
  const adjList = Array(numCourses);
  const indegree = Array(numCourses).fill(0);
  let visitedCount = 0;
  const queue = Array();
  const takenCourses = [];

  for (let i = 0; i < numCourses; i++) {
    adjList[i] = Array();
  }

  for (let i = 0; i < prerequisites.length; i++) {
    const [to, from] = prerequisites[i];

    indegree[to]++;
    adjList[from].push(to);
  }

  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      queue.push(i);
    }
  }

  while (queue.length) {
    const nodeIndex = queue.shift();
    const edges = adjList[nodeIndex];

    takenCourses.push(nodeIndex);

    visitedCount++;

    for (let i = 0; i < edges.length; i++) {
      indegree[edges[i]]--;
      if (indegree[edges[i]] === 0) {
        queue.push(edges[i]);
      }
    }
  }

  return visitedCount === numCourses ? takenCourses : [];
};

console.log(findOrder(2, [[1, 0]])); // [0,1]
console.log(
  findOrder(4, [
    [1, 0],
    [2, 0],
    [3, 1],
    [3, 2],
  ])
); // [0,1,2,3] or [0,2,1,3]
