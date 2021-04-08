/*
 * @lc app=leetcode.cn id=81 lang=javascript
 *
 * [81] 搜索旋转排序数组 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = (left + right) / 2 | 0;
        if (target === nums[mid]) {
            return true;
        }
        if (nums[mid] === nums[left]) {
            left++;
            continue;
        } else if (nums[mid] > nums[left]) {
            if (target < nums[mid] && target >= nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            if (target > nums[mid] && target <= nums[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }
    return false;
};

var r1 = search([3,5,1], 3);
console.log(r1);
// @lc code=end

