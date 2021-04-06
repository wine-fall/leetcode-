/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;
    while (n !== 0 && n != null) {
        count += n & 1;
        n >>>= 1;
    }
    return count;
};

var r1 = hammingWeight(11111111111111111111111111111101);
console.log(r1);
// @lc code=end

