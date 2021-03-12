/*
 * @lc app=leetcode.cn id=331 lang=javascript
 *
 * [331] 验证二叉树的前序序列化
 */

// @lc code=start
/**
 * @param {string} preorder
 * @return {boolean}
 */
var isValidSerialization = function(preorder) {
    const n = preorder.length;
    let i = 0;
    let slots = 1;
    while (i < n) {
        if (slots === 0) {
            return false;
        }
        if (preorder[i] === ',') {
            i++;
        } else if (preorder[i] === '#') {
            i++;
            slots--;
        } else {
            while (i < n && !isNaN(Number(preorder[i]))) {
                i++;
            }
            slots++;
        }
    }
    return slots === 0;
};

var r1 = isValidSerialization(
    "#,#"
);
console.log(r1);
// @lc code=end

