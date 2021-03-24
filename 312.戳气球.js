/*
 * @lc app=leetcode.cn id=312 lang=javascript
 *
 * [312] 戳气球
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxCoins = function(nums) {
    let max = -Number.MAX_SAFE_INTEGER;
    const dfs = (arr, score) => {
        if (arr.length === 0) {
            max = Math.max(max, score);
            return;
        }
        for (let i = 0; i < arr.length; i++) {
            const pre = arr[i - 1] || 1;
            const after = arr[i + 1] || 1;
            const curScore = arr[i] * pre * after;
            const temp = [...arr];
            arr.splice(i, 1);
            dfs(arr, score + curScore);
            arr = [...temp];
        }
    };
    dfs(nums, 0);
    return max;
};

var r1 = maxCoins([3,1,5,8]);
console.log(r1);
// @lc code=end

