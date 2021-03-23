/*
 * @lc app=leetcode.cn id=84 lang=javascript
 *
 * [84] 柱状图中最大的矩形
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
    const stack = [];
    heights.push(0);
    let maxArea = 0;
    for (let i = 0; i < heights.length; i++) {
        const cur = heights[i];
        while (stack.length
            && heights[stack[stack.length - 1]] > cur
        ) {
            const h = heights[stack.pop()];
            const left = stack.length ? stack[stack.length - 1] : 0;
            const len = i - left + 1 - (stack.length ? 2 : 1);
            maxArea = Math.max(h * len, maxArea);
        }
        stack.push(i);
    }
    return maxArea;
};

var r1 = largestRectangleArea([2,4]);
console.log(r1);
// @lc code=end

