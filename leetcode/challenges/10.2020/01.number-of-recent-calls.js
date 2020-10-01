// Problem: https://leetcode.com/explore/challenge/card/october-leetcoding-challenge/559/week-1-october-1st-october-7th/3480/

class RecentCounter {
  constructor() {
    this.requests = [];
  }

  /**
   * @param {number} t
   * @return {number}
   */
  ping(t) {
    this.requests.push(t);
    while (this.requests.length > 1 && this.requests[0] < t - 3000)
      this.requests.shift();
    return this.requests.length;
  }
}

const counter1 = new RecentCounter();
console.log(counter1.ping(1) === 1);
console.log(counter1.ping(100) === 2);
console.log(counter1.ping(3001) === 3);
console.log(counter1.ping(3002) === 3);

const counter2 = new RecentCounter();
console.log(counter2.ping(642) === 1);
console.log(counter2.ping(1849) === 2);
console.log(counter2.ping(4921) === 1);
console.log(counter2.ping(5936) === 2);
console.log(counter2.ping(5957) === 3);
