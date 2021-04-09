/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    const m = nums.length;
    let left = 0;
    let right = m - 1;
    let res = Number.MAX_SAFE_INTEGER;
    while (left <= right) {
        const mid = ((left + right) >> 1) | 0;
        if (nums[mid] === nums[left]) {
            res = Math.min(res, nums[left]);
            left++;
            continue;
        }
        if (nums[mid] > nums[left]) {
            res = Math.min(res, nums[left]);
            left = mid + 1;
        } else {
            res = Math.min(res, nums[mid]);
            right = mid - 1;
        }
    }
    return res;
};

var r1 = findMin([2,2,2,0,1]);
console.log(r1);