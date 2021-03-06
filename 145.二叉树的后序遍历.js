/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function(root) {
  let res = []
  helper(root,res)
  return res
};
function helper(root,res) {
  if (!root) { return }
  helper(root.left,res)
  helper(root.right,res)
  res.push(root.val)
}
postorderTraversal(1)
// @lc code=end

