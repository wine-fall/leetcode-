/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let map = new Map()
  for ( let num of nums) {
    if (map.has(num)) {
      map.set(num, map.get(num)+1)
    } else {
      map.set(num, 1)
    }
  }
  let res
  for ( let item of map) {
    if (item[1]>Math.floor(nums.length/2)) {
      res = item[0]
    }
  }
  return res
};
majorityElement([3,2,3])
// @lc code=end

