/*
 * @lc app=leetcode.cn id=368 lang=javascript
 *
 * [368] 最大整除子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function(nums) {
    nums.sort((a, b) => a - b);
    const m = nums.length;
    const dp = Array(m).fill(1);
    let maxVal = 0;
    let maxLen = 1;
    for (let i = 1; i < dp.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
            if (dp[i] > maxLen) {
                maxLen = dp[i];
                maxVal = nums[i];
            }
        }
    }
    const res = [];
    if (maxLen === 1) {
        return [maxVal];
    }
    for (let i = m - 1; i >= 0; i--) {
        if (dp[i] === maxLen && maxVal % nums[i] === 0) {
            res.unshift(nums[i]);
            maxLen--;
            maxVal = nums[i];
        }
    }
    return res;
};

var r1 = largestDivisibleSubset([1,2,4,8]);
console.log(r1);
// @lc code=end

