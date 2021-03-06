/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  let slow=fast=n
  while (true) {
    slow=goNext(slow)
    fast=goNext(fast)
    fast=goNext(fast)
    if ( slow === fast ) { break }
  }
  return slow === 1
};
var goNext = function(n) {
  let ans = 0
  while ( n!==0 ){
    p=n%10
    ans+=p*p
    n=Math.floor(n/10)
  }
  return ans
}
// @lc code=end

