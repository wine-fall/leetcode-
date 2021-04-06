/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var purchasePlans = function(nums, target) {
    nums.sort((a, b) => a - b);
    const mod = 1e9 + 7;
    let res = 0;
    const binarySearch = (rest, rTarget) => {
        let l = 0;
        let r = rest.length - 1;
        while (l < r) {
            const mid = ((l + r) / 2) | 0;
            if (rest[mid] === rTarget) {
                return mid + 1;
            } else if (rest[mid] > rTarget) {
                r = mid - 1;
            } else {
                l = mid + 1;
            }
        }
        return rest[l] > rTarget ? l : l + 1;
    };
    for (let i = 0; i < nums.length; i++) {
        const rest = nums.slice(i + 1);
        if (rest.length < 2) {
            nums[i] + rest[0] <= target && res++;
            continue;
        }
        const rTarget = target - nums[i];
        res += binarySearch(rest, rTarget);
    }
    return res % mod;
};
const arr = Array(1e5).fill(0).map((item, index) => index);
var r1 = purchasePlans(arr, 200);
console.log(r1);