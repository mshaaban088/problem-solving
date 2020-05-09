/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  return parseInt(
    num
      .toString(2)
      .split('')
      .map(Number)
      .map((n) => 1 - n)
      .join(''),
    2
  );
};

console.log(findComplement(5));
console.log(findComplement(1));
