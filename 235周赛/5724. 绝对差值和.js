/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var minAbsoluteSumDiff = function(nums1, nums2) {
    const sortNums1 = Array.from(new Set(nums1)).sort((a, b) => a - b);
    let res = 0;
    let maxDif = 0;
    for (let i = 0; i < nums2.length; i++) {
        const origin = Math.abs(nums2[i] - nums1[i]);
        res += origin;
        const target = nums2[i];
        let left = 0;
        let right = sortNums1.length - 1;
        while (left < right) {
            const mid = Math.floor((left + right) / 2);
            if (sortNums1[mid] === target) {
                left = mid;
                break;
            } else if (sortNums1[mid] < target) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        const curDif = Math.abs(Math.min(
            Math.abs(sortNums1[left] - target),
            Math.abs((sortNums1[left - 1] || sortNums1[left]) - target)
        ) - origin);
        maxDif = Math.max(maxDif, curDif);
    }
    return res - maxDif;
};

var r1 = minAbsoluteSumDiff([1,10,4,4,2,7], [9,3,5,1,7,4]);
console.log(r1);