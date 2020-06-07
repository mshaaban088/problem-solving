// Problem: https://leetcode.com/contest/weekly-contest-192/problems/design-browser-history/

class BrowserHistory {
  /**
   * @param {string} homepage
   */
  constructor(homepage) {
    this.history = [homepage];
    this.backHistory = [];
    this.index = 0;
  }
  /**
   * @param {string} url
   * @return {void}
   */
  visit(url) {
    this.backHistory = [];
    this.history.push(url);
    this.index++;
  }
  /**
   * @param {number} steps
   * @return {string}
   */
  back(steps) {
    let _steps = Math.min(steps, this.history.length - 1);
    while (_steps--) {
      this.backHistory.push(this.history.pop());
      this.index--;
    }
    return this.history[this.index];
  }
  /**
   * @param {number} steps
   * @return {string}
   */
  forward(steps) {
    let _steps = Math.min(steps, this.backHistory.length);
    while (_steps--) {
      this.history.push(this.backHistory.pop());
      this.index++;
    }
    return this.history[this.index];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */

/*
Output: [
  null,
  null,
  null,
  null,
  'facebook.com',
  'google.com',
  'facebook.com',
  null,
  'linkedin.com',
  'google.com',
  'leetcode.com',
]
 */
const obj = new BrowserHistory('leetcode.com');
obj.visit('google.com');
obj.visit('facebook.com');
obj.visit('youtube.com');
console.log(obj.back(1));
console.log(obj.back(1));
console.log(obj.forward(1));
obj.visit('linkedin.com');
console.log(obj.forward(2));
console.log(obj.back(2));
console.log(obj.back(7));
