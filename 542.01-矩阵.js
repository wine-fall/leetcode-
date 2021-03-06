/*
 * @lc app=leetcode.cn id=542 lang=javascript
 *
 * [542] 01 矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var updateMatrix = function(matrix) {
  let queue = []
  let dx = [1,-1,0,0]
  let dy = [0,0,1,-1]
  for (let i=0;i<matrix.length;i++) {
    for (let j=0;j<matrix[0].length;j++) {
      if (matrix[i][j] === 0) {
        queue.push([i,j])
      } else {
        matrix[i][j] = -1
      }
    }
  }
  while (queue.length) {
    let [x,y] = queue.shift()
    for (let k=0 ; k<4 ; k++) {
      let newX = x+dx[k]
      let newY = y+dy[k]
      if (newX>=0 && newX<matrix.length && newY>=0 && newY<matrix[0].length && matrix[newX][newY] === -1) {
        matrix[newX][newY]=matrix[x][y]+1
        queue.push([newX,newY])
      }
    }
  }
  return matrix
};
// @lc code=end

