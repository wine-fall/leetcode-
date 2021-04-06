/*
 * @lc app=leetcode.cn id=33 lang=javascript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0, right = nums.length-1
  while (left <= right) {
    let mid = Math.floor((left + right)/2)
    if (nums[mid] === target) { return mid }
    if (nums[mid] >= nums[left]) {
      if (target >= nums[left] && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (target >= nums[mid] && target <= nums[right]) {
        left = mid+1
      } else {
        right = mid-1
      }
    }
  }
  return -1
};
search([4,5,6,7,0,1,2], 0)
// @lc code=end

