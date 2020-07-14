// Problem: https://leetcode.com/explore/challenge/card/july-leetcoding-challenge/545/week-2-july-8th-july-14th/3390/

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
const angleClock = function (hour, minutes) {
  const hourInMinutesPosition = ((hour % 12) + minutes / 60) * 5;
  // difference in minutes * angle of 1 minute (6º)
  const angle = Math.abs(minutes - hourInMinutesPosition) * 6;

  return Math.min(angle, 360 - angle);
};

console.log(angleClock(12, 30) === 165);
console.log(angleClock(3, 30) === 75);
console.log(angleClock(3, 15) === 7.5);
console.log(angleClock(4, 50) === 155);
console.log(angleClock(12, 0) === 0);
console.log(angleClock(1, 57) === 76.5);
