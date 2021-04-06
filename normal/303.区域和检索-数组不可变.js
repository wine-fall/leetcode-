/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.map = {};
    let preSum = 0;
    for (let i = 0; i < nums.length; i++) {
        this.map[i] = preSum += nums[i];
    }
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i > 0
        ? this.map[j] - this.map[i - 1]
        : this.map[j];
};

var obj = new NumArray([-2, 0, 3, -5, 2, -1]);
var r1 = obj.sumRange(0, 3);
console.log(r1);

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
// @lc code=end

