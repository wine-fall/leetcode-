/*
 * @lc app=leetcode.cn id=55 lang=javascript
 *
 * [55] 跳跃游戏
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  let maxDistance = 0;
  for ( let i=0 ; i<nums.length ; i++) {
    if (i > maxDistance) { return false }
    maxDistance = Math.max(maxDistance, i + nums[i])
  }
  return true
};
canJump([3,2,1,0,4])
// @lc code=end

