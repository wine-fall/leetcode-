/*
 * @lc app=leetcode.cn id=1431 lang=javascript
 *
 * [1431] 拥有最多糖果的孩子
 */

// @lc code=start
/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
  let max = [...candies].sort((a,b) => b-a)[0]
  let res = []
  for (let i=0; i<candies.length; i++) {
    if (candies[i] + extraCandies >= max) {
      res.push(true)
    } else {
      res.push(false)
    }
  }
  return res
};
kidsWithCandies([2,3,5,1,3],3)
// @lc code=end

