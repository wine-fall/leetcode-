/*
 * @lc app=leetcode.cn id=347 lang=javascript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map[num]) {
            map[num]++;
        } else {
            map[num] = 1;
        }
    }
    const res = [];
    const bucket = Array(nums.length + 1);
    for (let i = 0; i < bucket.length; i++) {
        bucket[i] = [];
    }
    for (let key in map) {
        const curCount = map[key];
        bucket[curCount].push(key);
    }
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (res.length >= k) {
            break;
        }
        bucket[i].length && res.push(...bucket[i]);
    }
    return res;
};

var r1 = topKFrequent([1], 1);

console.log(r1);
// @lc code=end

