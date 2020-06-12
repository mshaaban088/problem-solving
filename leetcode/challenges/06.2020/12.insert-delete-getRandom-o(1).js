// Problem: https://leetcode.com/explore/featured/card/june-leetcoding-challenge/540/week-2-june-8th-june-14th/3358/

class RandomizedSet {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.map = {};
    this.arr = [];
  }

  /**
   * Inserts a value to the set. Returns true if the set did not already contain the specified element.
   * @param {number} val
   * @return {boolean}
   */
  insert(val) {
    if (val in this.map) {
      return false;
    }
    this.arr.push(val);
    this.map[val] = this.arr.length - 1;
    return true;
  }

  /**
   * Removes a value from the set. Returns true if the set contained the specified element.
   * @param {number} val
   * @return {boolean}
   */
  remove(val) {
    const { map, arr } = this;

    if (!(val in map)) {
      return false;
    }
    const index = map[val];
    const lastIndex = arr.length - 1;
    const lastElement = arr[lastIndex];

    // Swap val with last element
    arr[index] = lastElement;
    map[lastElement] = index;

    // remove last element
    arr.splice(lastIndex, 1);
    delete map[val];
    return true;
  }

  /**
   * Get a random element from the set.
   * @return {number}
   */
  getRandom() {
    const size = this.arr.length;
    const randomIndex = Math.floor(Math.random() * size);
    return this.arr[randomIndex];
  }
}

// Init an empty set.
const randomSet = new RandomizedSet();

// Inserts 1 to the set. Returns true as 1 was inserted successfully.
console.log(randomSet.insert(1) === true);

// Returns false as 2 does not exist in the set.
console.log(randomSet.remove(2) === false);

// Inserts 2 to the set, returns true. Set now contains [1,2].
console.log(randomSet.insert(2) === true);

// getRandom should return either 1 or 2 randomly.
console.log([1, 2].includes(randomSet.getRandom()));

// Removes 1 from the set, returns true. Set now contains [2].
console.log(randomSet.remove(1) === true);

// 2 was already in the set, so return false.
console.log(randomSet.insert(2) === false);

// Since 2 is the only number in the set, getRandom always return 2.
console.log(randomSet.getRandom() === 2);
