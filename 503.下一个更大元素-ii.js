/*
 * @lc app=leetcode.cn id=503 lang=javascript
 *
 * [503] 下一个更大元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    const n = nums.length;
    const res = Array(n).fill(-1);
    const stack = [];
    for (let i = 0; i < n * 2; i++) {
        while (stack.length
            && nums[stack[stack.length - 1]] < nums[i % n]
        ) {
            const curIndex = stack.pop();
            res[curIndex] = nums[i % n];
        }
        stack.push(i % n);
    }
    return res;
};

var r1 = nextGreaterElements([1,5,4,3,2,1]);

console.log(r1);
// @lc code=end

