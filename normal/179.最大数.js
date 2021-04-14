/*
 * @lc app=leetcode.cn id=179 lang=javascript
 *
 * [179] 最大数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    nums = nums.map(item => item.toString());
    nums.sort((a, b) => {
        return (b + a) - (a + b);
    });
    const res = nums.join('');
    return res[0] === '0' ? '0' : res;
};

var r1 = largestNumber([432,43243]);
console.log(r1);
// @lc code=end

