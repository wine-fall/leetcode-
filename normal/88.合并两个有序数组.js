/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let p1 = m - 1;
    let p2 = n - 1;
    let p = m + n - 1;
    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] >= nums2[p2]) {
            nums1[p] = nums1[p1];
            p--;
            p1--;
        } else {
            nums1[p] = nums2[p2];
            p--;
            p2--;
        }
    }
    nums1.splice(0, p2 + 1, ...nums2.slice(0, p2 + 1));
    return nums1;
};

var r1 = merge([1]
    ,1
    ,[]
    ,0);
console.log(r1);
// @lc code=end

