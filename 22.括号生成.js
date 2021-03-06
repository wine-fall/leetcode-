/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res=[]
  let path=""
  dfs(n,n,res,path)
  return res
};
var dfs = function(left,right,res,path) {
  if (left === 0 && right === 0) {
    res.push(path)
    return 
  }
  if ( left > 0 ) {
    dfs(left-1, right, res, path+"(")
  }
  if ( right>left ) {
    dfs(left, right-1, res, path+")")
  }
}
// @lc code=end

