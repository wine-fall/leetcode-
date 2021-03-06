/*
 * @lc app=leetcode.cn id=31 lang=javascript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    let p1 = nums.length - 1;
    let p2 = p1 - 1;
    let firstIndex = null;
    let secondIndex = null;
    while (p2 >= 0) {
        if (nums[p2] < nums[p1]) {
            firstIndex = p2;
            break;
        } else {
            p1--;
            p2--;
        }
    }
    if (p2 < 0) {
        nums.reverse();
        return nums.reverse();
    } else {
        for (let i = nums.length - 1; i >= 0; i--) {
            if (nums[i] > nums[firstIndex]) {
                secondIndex = i;
                break;
            }
        }
    }
    [nums[firstIndex], nums[secondIndex]] = [nums[secondIndex], nums[firstIndex]];
    // 反转
    let endIndex = nums.length - 1;
    let startIndex = firstIndex + 1;
    while (startIndex < endIndex) {
        [nums[startIndex], nums[endIndex]] = [nums[endIndex], nums[startIndex]];
        startIndex++;
        endIndex--;
    }
    return nums;
};

var r1 = nextPermutation([3,2,1]);

console.log(r1);
// @lc code=end

