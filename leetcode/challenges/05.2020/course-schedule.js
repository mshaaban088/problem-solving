/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
const canFinish = function (numCourses, prerequisites) {
  const adjList = Array(numCourses);
  const indegree = Array(numCourses).fill(0);
  let visitedCount = 0;
  const queue = Array();

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

    visitedCount++;

    for (let i = 0; i < edges.length; i++) {
      indegree[edges[i]]--;
      if (indegree[edges[i]] === 0) {
        queue.push(edges[i]);
      }
    }
  }

  return visitedCount === numCourses;
};

console.log(canFinish(2, [[1, 0]]) === true);
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ]) === false
);
