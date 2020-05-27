/**
 * @param {number} N
 * @param {number[][]} dislikes
 * @return {boolean}
 */
const possibleBipartition = function (N, dislikes) {
  const graph = Array(N);
  for (let i = 0; i < graph.length; i++) {
    graph[i] = [];
  }

  for (let i = 0; i < dislikes.length; i++) {
    const [u, v] = dislikes[i];
    graph[u - 1].push(v - 1);
    graph[v - 1].push(u - 1);
  }

  const colors = Array(N).fill(0);
  for (let i = 0; i < colors.length; i++) {
    if (colors[i] !== 0) {
      continue;
    }
    colors[i] = 1;

    const queue = [i];

    while (queue.length) {
      const node = queue.shift();
      const children = graph[node];
      for (let child of children) {
        if (colors[node] === colors[child]) {
          return false;
        }
        if (colors[child] === 0) {
          colors[child] = !colors[node];
          queue.push(child);
        }
      }
    }
  }

  return true;
};

console.log(
  possibleBipartition(4, [
    [1, 2],
    [1, 3],
    [2, 4],
  ]) === true
);
console.log(
  possibleBipartition(3, [
    [1, 2],
    [1, 3],
    [2, 3],
  ]) === false
);
console.log(
  possibleBipartition(5, [
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
    [1, 5],
  ]) === false
);
