/*
 * @lc app=leetcode.cn id=994 lang=javascript
 *
 * [994] 腐烂的橘子
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function(grid) {
  let queue =[], fresh = 0, minute = 0
  let dx = [1,-1,0,0]
  let dy = [0,0,1,-1]
  for (let i=0; i<grid.length; i++) {
    for (let j=0; j<grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i,j])
      }
      if (grid[i][j] === 1) {
        fresh++
      }
    }
  }
  while (queue.length) {
    let size = queue.length
    minute++
    for (let i=0; i<size; i++) {
      let [x,y] = queue.pop()
      for (let k=0; k<4; k++) {
        let newX = x+dx[k]
        let newY = y+dy[k]
        if (newX>=0 && newX<grid.length && newY>=0 && newY<grid[0].length && grid[newX][newY] === 1) {
          fresh--
          grid[newX][newY] = 2
          queue.unshift([newX, newY])
        }
      }
    }
  }
  return fresh > 0 ? -1 : minute 
};
orangesRotting([[2,1,1],[1,1,0],[0,1,1]])
// @lc code=end

