/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    const dp = Array(s.length).fill(0);
    dp[0] = 1;
    const isPalindrome = (s, i, j) => {
        while (i < j) {
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    };
    let res = s[0];
    for (let i = 1; i < dp.length; i++) {
        let j = i - 1;
        while (j >= 0) {
            if (isPalindrome(s, j, i)) {
                if (i - j + 1 > dp[i - 1]) {
                    res = s.slice(j, i + 1);
                }
                dp[i] = Math.max(dp[i - 1], i - j + 1);
            } else {
                dp[i] = Math.max(dp[i], dp[i - 1]);
            }
            j--;
        }
    }
    return res;
};
var r1 = longestPalindrome("abbcccbbbcaaccbababcbcabca");
console.log(r1);
// @lc code=end

