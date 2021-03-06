/*
 * @lc app=leetcode.cn id=78 lang=javascript
 *
 * [78] 子集
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    const offSet = nums.length;
    const n = (1 << offSet) - 1;
    let i = n;
    const res = [[]];
    while (i > 0) {
        let stringI = i.toString(2).padStart(offSet, '0');
        let curRes = [];
        for (let j = 0; j < stringI.length; j++) {
            const char = stringI[j];
            if (char === '1') {
                curRes.push(nums[j]);
            }
        }
        res.push(curRes);
        i = (i - 1) & n;
    }
    return res;
};

const r1 = subsets([0]);
console.log(r1);
// @lc code=end

