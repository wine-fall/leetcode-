/*
 * @lc app=leetcode.cn id=75 lang=javascript
 *
 * [75] 颜色分类
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    const quickSort = (arr, start, end) => {
        if (start >= end) {
            return;
        }
        let i = start;
        let j = end;
        const piovt = arr[start];
        while (i < j) {
            while (i < j && arr[j] > piovt) {
                j--;
            }
            while (i < j && arr[i] <= piovt) {
                i++;
            }
            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
        arr[start] = arr[i];
        arr[i] = piovt;
        quickSort(arr, start, i - 1);
        quickSort(arr, i + 1, end);
    };
    quickSort(nums, 0, nums.length - 1);
    return nums;
};
var r1 = sortColors([2,0,2,1,1,0]);
console.log(r1);
// @lc code=end

