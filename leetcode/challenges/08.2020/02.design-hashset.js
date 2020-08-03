// Problem: https://leetcode.com/explore/challenge/card/august-leetcoding-challenge/549/week-1-august-1st-august-7th/3410/

class MyHashSet {
  /**
   * Initialize your data structure here.
   */
  constructor() {
    this.size = 1000;
    this.items = Array(this.size);
    for (let i = 0; i < this.size; i++) {
      this.items[i] = [];
    }
  }

  _hashCode(key) {
    return key % this.size;
  }

  /**
   * @param {number} key
   * @return {void}
   */
  add(key) {
    const hashCode = this._hashCode(key);
    const subArr = this.items[hashCode];
    for (const item of subArr) {
      if (item === key) return;
    }

    subArr.push(key);
  }

  /**
   * @param {number} key
   * @return {void}
   */
  remove(key) {
    const hashCode = this._hashCode(key);
    const subArr = this.items[hashCode];
    for (const itemIndex in subArr) {
      if (subArr[itemIndex] === key) {
        subArr.splice(itemIndex, 1);
        return;
      }
    }
  }

  /**
   * Returns true if this set contains the specified element
   * @param {number} key
   * @return {boolean}
   */
  contains(key) {
    const hashCode = this._hashCode(key);
    const subArr = this.items[hashCode];
    for (const item of subArr) {
      if (item === key) return true;
    }

    return false;
  }
}

const hashSet = new MyHashSet();
hashSet.add(1);
hashSet.add(2);
console.log(hashSet.contains(1) === true); // returns true
console.log(hashSet.contains(3) === false); // returns false (not found)
hashSet.add(2);
console.log(hashSet.contains(2) === true); // returns true
hashSet.remove(2);
console.log(hashSet.contains(2) === false); // returns false (already removed)
