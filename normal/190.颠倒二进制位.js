/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    let res = 0;
    for (let i = 0; i < 32; i++) {
        res = (res << 1) + (n & 1);
        n = n >>> 1;
    }
    return res >>> 0;
};

var r1 = reverseBits(00000010100101000001111010011100);
console.log(r1);
// @lc code=end

