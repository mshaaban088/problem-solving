/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
const findJudge = function (N, trust) {
  const givers = Array(N + 1).fill(0);
  const receivers = Array(N + 1).fill(0);

  if (N === 1) return 1;

  for (let i = 0; i < trust.length; i++) {
    const [giver, receiver] = trust[i];
    givers[giver]++;
    receivers[receiver]++;
  }

  for (let i = 1; i <= N; i++) {
    if (receivers[i] === N - 1 && givers[i] === 0) {
      return i;
    }
  }
  return -1;
};

console.log(findJudge(2, [[1, 2]]) === 2);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
  ]) === 3
);
console.log(
  findJudge(3, [
    [1, 3],
    [2, 3],
    [3, 1],
  ]) === -1
);
console.log(
  findJudge(3, [
    [1, 2],
    [2, 3],
  ]) === -1
);
console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ]) === 3
);
console.log(findJudge(1, []) === 1);
