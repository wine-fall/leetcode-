/*
 * @lc app=leetcode.cn id=264 lang=javascript
 *
 * [264] 丑数 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    const dp = [0, 1];
    let p1 = 1;
    let p2 = 1;
    let p3 = 1;
    for (let i = 2; i <= n; i++) {
        let n1 = 2 * dp[p1];
        let n2 = 3 * dp[p2];
        let n3 = 5 * dp[p3];
        dp[i] = Math.min(n1, n2, n3);
        if (dp[i] === n1) {
            p1++;
        }
        if (dp[i] === n2) {
            p2++;
        }
        if (dp[i] === n3) {
            p3++;
        }
    }
    return dp[n];
};

var r1 = nthUglyNumber(10);
console.log(r1);
// @lc code=end

