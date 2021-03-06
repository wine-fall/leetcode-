/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  if (!grid.length) { return 0 }
  let count = 0
  for ( let i=0 ; i<grid.length ; i++) {
    for (let j=0 ; j<grid[0].length ; j++) {
      if (grid[i][j] === "1") {
        markOcean(grid,i,j)
        count++
      }
    }
  }
  return count
};
var markOcean = function(grid, i, j) {
  if (i<0 || i>=grid.length || j<0 || j>=grid[0].length || grid[i][j] === "0") { return }
  grid[i][j] = "0"
  markOcean(grid,i-1,j)
  markOcean(grid,i+1,j)
  markOcean(grid,i,j+1)
  markOcean(grid,i,j-1)
  return grid
}
// @lc code=end

