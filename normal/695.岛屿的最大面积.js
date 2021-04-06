/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  let maxArea = 0
  for (let i=0 ; i<grid.length ;i++) {
    for (let j=0; j<grid[0].length; j++) {
      maxArea = Math.max(maxArea,getArea(grid,i,j))
    }
  }
  return maxArea
};
var getArea = function(grid,i,j) {
  if (i<0 || i>=grid.length || j<0 || j>=grid[0].length) {
    return 0
  }
  if (grid[i][j] === 1) {
    grid[i][j] = 2
    return 1+getArea(grid,i,j+1)+getArea(grid,i,j-1)+getArea(grid,i+1,j)+getArea(grid,i-1,j)
  }
  return 0
}
// @lc code=end

