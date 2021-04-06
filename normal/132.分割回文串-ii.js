/*
 * @lc app=leetcode.cn id=132 lang=javascript
 *
 * [132] 分割回文串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var minCut = function(s) {
    const dp = Array(s.length).fill(s.length - 1);
    const memo = Array(s.length);
    for (let i = 0; i < s.length; i++) {
        memo[i] = Array(s.length);
    }
    for (let i = 0; i < s.length; i++) {
        if (isPalindrome(s, 0, i, memo)) {
            dp[i] = 0;
            continue;
        }
        for (let j = 0; j < i; j++) {
            if (memo[j + 1][i] === false) {
                continue;
            }
            if (isPalindrome(s, j + 1, i, memo)) {
                dp[i] = Math.min(dp[i], dp[j] + 1);
            }
        }
    }
    return dp[dp.length - 1];
};

var isPalindrome = function(s, start, i, memo) {
    while (start < i) {
        if (s[start] !== s[i]) {
            memo[start][i] = false;
            return false;
        }
        start++;
        i--;
    }
    memo[start][i] = true;
    return true;
};

var r1 = minCut("ab");
console.log(r1);
// @lc code=end

