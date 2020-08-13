// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/550/week-2-august-8th-august-14th/3422/

class CombinationIterator {
  /**
   * @param {string} characters
   * @param {number} combinationLength
   */
  constructor(characters, combinationLength) {
    this.characters = characters;
    this.n = characters.length;
    this.k = combinationLength;
    this.combinations = this._generateCombinations();
    this.start = 0;
  }

  /**
   * @return {string}
   */
  next() {
    return this.hasNext() ? this.combinations[this.start++] : '';
  }

  /**
   * @return {boolean}
   */
  hasNext() {
    return this.start < this.combinations.length;
  }

  _generateCombinations() {
    const combinations = [];

    for (let mask = 1; mask < 1 << this.n; mask++) {
      const combination = [];
      for (let i = 0, num = mask; num > 0; i++, num >>= 1) {
        if (num & 1) {
          combination.push(this.characters[i]);
        }
      }
      if (combination.length === this.k) {
        combinations.push(combination.join(''));
      }
    }

    combinations.sort();

    return combinations;
  }
}

let iterator = new CombinationIterator('abc', 2);

console.log(iterator.next() === 'ab');
console.log(iterator.hasNext() === true);
console.log(iterator.next() === 'ac');
console.log(iterator.hasNext() === true);
console.log(iterator.next() === 'bc');
console.log(iterator.hasNext() === false);

iterator = new CombinationIterator('bvwz', 2);

console.log(iterator.hasNext() === true);
console.log(iterator.hasNext() === true);
console.log(iterator.next() === 'bv');
console.log(iterator.next() === 'bw');
console.log(iterator.hasNext() === true);
console.log(iterator.hasNext() === true);
console.log(iterator.next() === 'bz');
console.log(iterator.hasNext() === true);
