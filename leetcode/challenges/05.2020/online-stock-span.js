class StockSpanner {
  /**
   * @param {list} stack
   */
  constructor() {
    this.stack = [];
  }

  /**
   * @param {number} price
   * @return {number}
   */
  next(price) {
    let totalCount = 1;

    while (this.stack.length && this.stack[this.stack.length - 1].price <= price) {
      const { count } = this.stack.pop();
      totalCount += count;
    }

    this.stack.push({ price, count: totalCount });
    return totalCount;
  }
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

const stockSpanner = new StockSpanner();

console.log(stockSpanner.next(29) === 1);
console.log(stockSpanner.next(91) === 2);
console.log(stockSpanner.next(62) === 1);
console.log(stockSpanner.next(76) === 2);
console.log(stockSpanner.next(51) === 1);

// console.log(stockSpanner.next(100) === 1);
// console.log(stockSpanner.next(80) === 1);
// console.log(stockSpanner.next(60) === 1);
// console.log(stockSpanner.next(70) === 2);
// console.log(stockSpanner.next(60) === 1);
// console.log(stockSpanner.next(75) === 4);
// console.log(stockSpanner.next(85) === 6);
