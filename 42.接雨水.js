/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let stack = []
  let ans=0
  for ( let i=0 ; i<height.length ; i++) {
    while (height[stack[stack.length-1]] < height[i]) {
      let cur = stack[stack.length-1]
      stack.pop()
      if (!stack.length) { break }
      let l = stack[stack.length-1]
      let r = i
      let h = Math.min(height[l],height[r])-height[cur]
      ans += h*(r-l-1)
    }
    stack.push(i)
  }
  return ans
};
// @lc code=end

