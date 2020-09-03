// Problem: https://leetcode.com/explore/challenge/card/september-leetcoding-challenge/554/week-1-september-1st-september-7th/3445/

/**
 * @param {number[]} A
 * @return {string}
 */
const largestTimeFromDigits = function (A) {
  function permutations(A) {
    const perms = new Set();

    function _perm(str, curr) {
      if (str.length === 0) {
        perms.add(curr);
      }

      for (let i = 0; i < str.length; i++) {
        _perm(str.substring(0, i) + str.substring(i + 1), curr + str[i]);
      }
    }

    _perm(A.join(''), '');

    return [...perms];
  }

  const perms = permutations(A);

  let maxTime = '';

  for (const perm of perms) {
    const hh = perm.substring(0, 2);
    const mm = perm.substring(2);
    const time = `${hh}:${mm}`;

    if (hh < 24 && mm < 60 && time > maxTime) {
      maxTime = time;
    }
  }

  return maxTime;
};

console.log(largestTimeFromDigits([1, 2, 3, 4]) === '23:41');
console.log(largestTimeFromDigits([5, 5, 5, 5]) === '');
