class LRUNode {
  key;
  value;
  next;
  prev;

  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class LRUCache {
  capacity;
  top;
  least;
  map;

  /**
   * @param {number} capacity
   */
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.top = this.least = null;
  }
  /**
   * @param {number} key
   * @return {number}
   */
  // tail -> 1 <- 2 <- 3 <- head
  get(key) {
    if (!this.map.has(key)) {
      return -1;
    }
    const node = this.map.get(key);

    this._removeNode(node);
    this._moveNodeToTop(node);

    return node.value;
  }

  /**
   * @param {number} key
   * @param {number} value
   * @return {void}
   */
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;

      this._removeNode(node);
      this._moveNodeToTop(node);
    } else {
      if (this.map.size >= this.capacity) {
        this.map.delete(this.least.key);
        this._removeNode(this.least);
      }

      const node = new LRUNode(key, value);

      this.map.set(key, node);
      this._moveNodeToTop(node);
    }
  }

  _removeNode(node) {
    if (node.next != null) {
      node.next.prev = node.prev;
    } else {
      this.top = node.prev;
    }
    if (node.prev != null) {
      node.prev.next = node.next;
    } else {
      this.least = node.next;
    }
  }

  _moveNodeToTop(node) {
    if (this.top != null) {
      this.top.next = node;
    }

    node.prev = this.top;
    node.next = null;

    this.top = node;

    if (this.least == null) {
      this.least = this.top;
    }
  }

  print() {
    const values = [];
    let temp = this.top;
    while (temp != null) {
      values.push(temp.value);
      temp = temp.prev;
    }
    console.log(values.reverse());
  }
}

const cache = new LRUCache(2 /* capacity */);

cache.put(1, 1);
cache.print();
cache.put(2, 2);
cache.print();
console.log(cache.get(1) === 1); // returns 1
cache.print();
cache.put(3, 3); // evicts key 2
console.log(cache.get(2) === -1); // returns -1 (not found)
cache.put(4, 4); // evicts key 1
console.log(cache.get(1) === -1); // returns -1 (not found)
console.log(cache.get(3) === 3); // returns 3
console.log(cache.get(4) === 4); // returns 4
