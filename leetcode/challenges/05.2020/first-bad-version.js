/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  function binarySearch(left, right) {
    if (left === right) return left;

    const mid = left + parseInt((right - left) / 2);
    if (isBadVersion(mid)) {
      return binarySearch(left, mid);
    } else {
      return binarySearch(mid + 1, right);
    }
  }

  return function (n) {
    return binarySearch(1, n);
  };
};

const checker = solution((version) => version >= 4);
console.log(checker(5)); // 4
