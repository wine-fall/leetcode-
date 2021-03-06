/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if ( !s && !t ) { return true }
  if ( !s || !t ) { return false }
  return isSame(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t) 
};

var isSame = function(s, t) {
  if ( !s && !t ) { return true }
  if ( !s || !t ) { return false }
  return s.val === t.val && isSame(s.left,t.left) && isSame(s.right, t.right)
}
// @lc code=end

