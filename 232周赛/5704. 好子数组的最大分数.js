/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximumScore = function(nums, k) {
    let l = k;
    let r = k;
    let maxScore = -Number.MAX_SAFE_INTEGER;
    while (true) {
        while (nums[r] >= nums[k] && r < nums.length) {
            r++;
        }
        while (nums[l] >= nums[k] && l >= 0) {
            l--;
        }
        maxScore = Math.max(maxScore, (r - l - 1) * nums[k]);
        if (r >= nums.length && l < 0) {
            break;
        } else if (r < nums.length && l >= 0) {
            nums[k] = Math.max(nums[l], nums[r]);
        } else if (l < 0) {
            nums[k] = nums[r];
        } else {
            nums[k] = nums[l];
        }
    }
    return maxScore;
};

var r1 = maximumScore([6569,9667,3148,7698,1622,2194,793,9041,1670,1872], 5); // should be: 9732
console.log(r1);

var r2 = maximumScore([5,5,4,5,4,1,1,1], 4);
console.log(r2);