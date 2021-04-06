/*
 * @lc app=leetcode.cn id=456 lang=javascript
 *
 * [456] 132模式
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var find132pattern = function(nums) {
    const p3s = [];
    let p2 = -Number.MAX_SAFE_INTEGER;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] < p2) {
            return true;
        }
        while (p3s.length && p3s[p3s.length - 1] < nums[i]) {
            p2 = p3s.pop();
        }
        p3s.push(nums[i]);
    }
    return false;
};

var r1 = find132pattern([1,4,0,-1,-2,-3,-1,-2]);
console.log(r1);
// @lc code=end

