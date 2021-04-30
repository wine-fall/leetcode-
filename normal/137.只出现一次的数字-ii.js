/*
 * @lc app=leetcode.cn id=137 lang=javascript
 *
 * [137] 只出现一次的数字 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let ans = 0;
    const map = {};
    for (let n of nums) {
        map[n] ? map[n]++ : map[n] = 1;
    }
    return Object.keys(map).find(key => map[key] === 1);
};
var r1 = singleNumber([2,2,3,2]);
console.log(r1);
// @lc code=end

