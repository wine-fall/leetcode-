/*
 * @lc app=leetcode.cn id=220 lang=javascript
 *
 * [220] 存在重复元素 III
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    const arr = [];
    nums.forEach((val, index) => {
        arr.push({val, index});
    });
    arr.sort((a, b) => a.val - b.val);
    for (let i = 0; i < arr.length - 1; i++) {
        const o1 = arr[i];
        let p = i + 1;
        while (p < arr.length) {
            const o2 = arr[p];
            if (Math.abs(o1.val - o2.val) <= t
            && Math.abs(o1.index - o2.index) <= k
            ) {
                return true;
            }
            p++;
        }
    }
    return false;
};

var r1 = containsNearbyAlmostDuplicate([2147483640,2147483641]
    ,1
    ,100);

console.log(r1);
// @lc code=end

