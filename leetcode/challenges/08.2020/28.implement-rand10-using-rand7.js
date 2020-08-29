// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/552/week-4-august-22nd-august-28th/3439/

const rand7 = () => Math.floor(Math.random() * 7) + 1;
/**
 * The rand7() API is already defined for you.
 * var rand7 = function() {}
 * @return {number} a random integer in the range 1 to 7
 */
const rand10 = function () {
  let rand40 = 40;

  while (rand40 >= 40) {
    rand40 = (rand7() - 1) * 7 + (rand7() - 1);
  }

  return (rand40 % 10) + 1;
};

console.log([rand10()]);
console.log([rand10(), rand10()]);
console.log([rand10(), rand10(), rand10()]);
