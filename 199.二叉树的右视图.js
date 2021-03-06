/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
  let queue = []
  let res = []
  if ( !root ) { return [] }
  queue.push(root)
  while ( queue.length ) {
    let size = queue.length
    for ( let i=0 ; i<size ; i++) {
      let node = queue.shift()
      if (node.left) {
        queue.push(node.left)
      }
      if (node.right) {
        queue.push(node.right)
      }
      if ( i === size-1 ) { res.push(node.val) }
    }
  }
  return res
};
// @lc code=end

