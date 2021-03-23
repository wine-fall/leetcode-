/*
 * @lc app=leetcode.cn id=85 lang=javascript
 *
 * [85] 最大矩形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
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

var maximalRectangle = function(matrix) {
    const countHeight = row => {
        const heights = [];
        for (let j = 0; j < matrix[0].length; j++) {
            let curHeight = 0;
            let i = row;
            while (i >= 0) {
                if (matrix[i][j] === '1') {
                    curHeight++;
                    i--;
                } else {
                    break;
                }
            }
            heights.push(curHeight);
        }
        return heights;
    };
    let maxArea = 0;
    for (let i = 0; i < matrix.length; i++) {
        const curHeights = countHeight(i);
        maxArea = Math.max(
            maxArea,
            largestRectangleArea(curHeights)
        );
    }
    return maxArea;
};

var r1 = maximalRectangle([
    ["1","0","1","1","1"],
    ["0","1","0","1","0"],
    ["1","1","0","1","1"],
    ["1","1","0","1","1"],
    ["0","1","1","1","1"]
]);
console.log(r1);
// @lc code=end

