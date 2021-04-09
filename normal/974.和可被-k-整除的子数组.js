/*
 * @lc app=leetcode.cn id=974 lang=javascript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var subarraysDivByK = function(A, K) {
    const map = {};
    map[0] = 1;
    let count = 0;
    let sum = 0;
    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        for (let key in map) {
            if ((sum - key) % K === 0) {
                count += map[key];
            }
        }
        map[sum] ? map[sum]++ : map[sum] = 1;
    }
    return count;
};

var r1 = subarraysDivByK([4,5,0,-2,-3,1], 5);
console.log(r1);
// @lc code=end

