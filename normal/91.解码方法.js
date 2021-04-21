/*
 * @lc app=leetcode.cn id=91 lang=javascript
 *
 * [91] 解码方法
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const m = s.length;
    const dp = Array(m + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i < m + 1; i++) {
        if (s[i - 1] !== '0') {
            dp[i] += dp[i - 1];
        }
        if (i <= 1) {
            continue;
        }
        if (s[i - 2] !== '0' && Number(s.substring(i - 2, i)) <= 26) {
            dp[i] += dp[i - 2];
        }
    }
    return dp[m];
};

var r1 = numDecodings("301");
console.log(r1);
// @lc code=end

