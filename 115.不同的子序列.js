/*
 * @lc app=leetcode.cn id=115 lang=javascript
 *
 * [115] 不同的子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var numDistinct = function(s, t) {
    const dp = new Array(s.length + 1);
    for (let i = 0; i < s.length + 1; i++) {
        dp[i] = new Array(t.length + 1).fill(0);
    }
    for (let i = 0; i < s.length + 1; i++) {
        for (let j = 0; j < t.length + 1; j++) {
            if (j === 0) {
                dp[i][j] = 1;
            } else if (i === 0) {
                dp[i][j] = 0;
            } else {
                if (s[i - 1] === t[j - 1]) {
                    dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
                } else {
                    dp[i][j] = dp[i - 1][j];
                }
            }
        }
    }
    return dp[s.length][t.length];
};

var r1 = numDistinct("rabbbit"
    , "rabbit");

console.log(r1);
// @lc code=end

