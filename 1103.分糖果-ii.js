/*
 * @lc app=leetcode.cn id=1103 lang=javascript
 *
 * [1103] 分糖果 II
 */

// @lc code=start
/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function(candies, num_people) {
  let children = Array(num_people).fill(0)
  let i=0
  while (candies>0) {
    children[i%num_people] += Math.min(i+1, candies)
    candies-= Math.min(i+1, candies)
    i++
  }
  return children
};
let res = distributeCandies(10,3)
console.log(res)
// @lc code=end

