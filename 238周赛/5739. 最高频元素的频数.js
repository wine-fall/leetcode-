/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function(nums, k) {
    nums.sort((a, b) => a - b);
    const check = (l, r) => {
        let c = k;
        while (l < r && c > 0) {
            c -= nums[r] - nums[l];
            l++;
        }
        return c >= 0;
    };
    let l = 0;
    let r = 0;
    let max = 1;
    while (r < nums.length) {
        while (r < nums.length && check(l, r)) {
            r++;
        }
        max = Math.max(max, check(l, r) ? r - l + 1 : r - l);
        while (!check(l, r) && l <= r) {
            l++;
        }
    }
    return max;
};

var r1 = maxFrequency([3,9,6], 2);
console.log(r1);