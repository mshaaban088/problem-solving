const A = 'A'.charCodeAt(0);
const z = 'z'.charCodeAt(0);

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  //*
  const chars = Array(52).fill(0);

  for (let i in J) {
    chars[J.charCodeAt(i) - A] = 1;
  }

  let jewelsCount = 0;

  for (let i in S) {
    const ch = S.charCodeAt(i) - A;

    if (chars[ch]) {
      jewelsCount++;
    }
  }

  return jewelsCount;
  /*/
  const chars = {};
  for (let c of J) {
    chars[c] = true;
  }

  return S.split('').reduce((count, c) => (chars[c] ? count + 1 : count), 0);
  //*/
};

console.log(numJewelsInStones('z', 'ZZ'));
