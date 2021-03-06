/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  if (!intervals.length) { return [] }
  let res = []
  intervals.sort((a,b)=>{
    a[0]-b[0]
  })
  res.push(intervals[0])
  for (let i=1;i<intervals.length;i++) {
    if (intervals[i][0]>res[res.length-1][1]) {
      res.push(intervals[i])
    }
    if (intervals[i][1]>res[res.length-1][1]) {
      res[res.length-1][1]=intervals[i][1]
    }
  }
  return res
};
let ans = merge([[1,4],[4,5]])
console.log(ans);

// @lc code=end

