/*
 * @lc app=leetcode.cn id=152 lang=javascript
 *
 * [152] 乘积最大子数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    let imax = 1, imin = 1, max = -Infinity;
    for (let num of nums) {
        if (num < 0) {
            [imin, imax] = [imax, imin];
        }
        imin = Math.min(num, num * imin);
        imax = Math.max(num, num * imax);
        max = Math.max(max, imax);
    }
    return max;
};

var r1 = maxProduct([2,3,-2,4]);
console.log(r1);
// @lc code=end

