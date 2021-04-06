/*
 * @lc app=leetcode.cn id=416 lang=javascript
 *
 * [416] 分割等和子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function(nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }
    if (sum % 2 === 1) {
        return false;
    }
    const target = sum / 2;
    const memo = {};
    let flag = false;
    const dfs = (start, curSum) => {
        if (curSum === target) {
            flag = true;
            return;
        }
        if (
            start > nums.length - 1
            || curSum > target
            || memo[curSum]
        ) {
            return;
        }
        for (let i = start; i < nums.length; i++) {
            const num = nums[i];
            curSum += num;
            dfs(i + 1, curSum);
            memo[curSum] = true;
            curSum -= num;
        }
    };
    dfs(0, 0);
    return flag;
};

var r1 = canPartition([1, 2, 5]);

console.log(r1);
// @lc code=end

