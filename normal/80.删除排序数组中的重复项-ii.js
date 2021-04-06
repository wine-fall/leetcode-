/*
 * @lc app=leetcode.cn id=80 lang=javascript
 *
 * [80] 删除排序数组中的重复项 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 2) {
        return 2;
    }
    let slow = 2;
    let fast = 2;
    while (fast < nums.length) {
        if (nums[slow - 2] !== nums[fast]) {
            nums[slow] = nums[fast];
            slow++;
        }
        fast++;
    }
    return slow;
};

var r1 = removeDuplicates([1,1,1,2,2,3]);
console.log(r1);
// @lc code=end

