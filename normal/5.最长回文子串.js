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
    const n = s.length;
    const f = new Array(n).fill(0).map(() => new Array(n).fill(true));
    let arr = [0, 0];
    let max = 0;
    for (let i = n - 1; i >= 0; --i) {
        for (let j = i + 1; j < n; ++j) {
            if (s[i] === s[j]) {
                if (j - i + 1 <= 2) {
                    f[i][j] = true;
                } else {
                    f[i][j] = f[i + 1][j - 1];
                }
            } else {
                f[i][j] = false;
            }
            if (f[i][j] && j - i + 1 > max) {
                max = j - i + 1;
                arr = [i, j];
            }
        }
    }
    return s.substring(arr[0], arr[1] + 1);
};
var r1 = longestPalindrome("aaaa");
console.log(r1);
// @lc code=end

