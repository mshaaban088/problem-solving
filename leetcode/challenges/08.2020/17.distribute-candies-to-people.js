// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/551/week-3-august-15th-august-21st/3427/

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
const distributeCandies = function (candies, num_people) {
  let i = 0;

  const output = Array(num_people).fill(0);

  while (candies > 0) {
    const inc = i + 1 <= candies ? i + 1 : candies;
    output[i % num_people] += inc;
    candies -= inc;
    i++;
  }
  return output;
};

console.log(distributeCandies(7, 4).toString() === [1, 2, 3, 1].toString());
console.log(distributeCandies(10, 3).toString() === [5, 2, 3].toString());
console.log(
  distributeCandies(100, 4).toString() === [28, 27, 21, 24].toString()
);
