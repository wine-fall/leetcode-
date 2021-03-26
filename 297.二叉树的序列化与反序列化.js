/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    if (!root) {
        return [];
    }
    const queue = [root];
    const res = [];
    while (queue.length) {
        const node = queue.shift();
        res.push((node !== null && node.val) ? node.val : null);
        node && queue.push(node.left);
        node && queue.push(node.right);
    }
    let i = res.length - 1;
    while (res[i] === null) {
        res.pop();
        i--;
    }
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) {
        return null;
    }
    const root = new TreeNode(data.shift());
    const queue = [root];
    while (queue.length) {
        const n = queue.length;
        for (let i = 0; i < n; i++) {
            const node = queue.shift();
            if (!node) {
                continue;
            }
            const leftVal = data.shift();
            const rightVal = data.shift();
            node.left = leftVal !== null ? new TreeNode(leftVal) : null;
            node.right = rightVal !== null ? new TreeNode(rightVal) : null;
            if (data.length) {
                queue.push(node.left);
                queue.push(node.right);
            }
        }
    }
    return root;
};

var r1 = deserialize([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]);
var r2 = serialize(r1);
console.log(r2);

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

