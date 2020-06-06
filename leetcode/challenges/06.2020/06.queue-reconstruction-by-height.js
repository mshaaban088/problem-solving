// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/539/week-1-june-1st-june-7th/3352/

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  // Sort by height H desc, if same, by K asc, then insert person at K position in the array
  return people
    .sort((p1, p2) => (p1[0] === p2[0] ? p1[1] - p2[1] : p2[0] - p1[0]))
    .reduce((queue, p) => {
      queue.splice(p[1], 0, p);
      return queue;
    }, []);
};

/*
[
  [5,0],
  [7,0],
  [5,2],
  [6,1],
  [4,4],
  [7,1]
]
 */
console.log(
  reconstructQueue([
    [7, 0],
    [4, 4],
    [7, 1],
    [5, 0],
    [6, 1],
    [5, 2],
  ])
);
