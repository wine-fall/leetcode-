/*
 * @lc app=leetcode.cn id=289 lang=javascript
 *
 * [289] 生命游戏
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  let copy=[]
  let dx=[1,-1,1,-1,1,-1,0,0]
  let dy=[-1,1,1,-1,0,0,1,-1]
  copy = board.map((arr)=>{
    return [...arr]
  })
  for (let i=0; i<board.length; i++) {
    for (let j=0; j<board[0].length; j++) {
      for (let k=0; k<8; k++) {
        
      }
    }
  }
};
// @lc code=end

