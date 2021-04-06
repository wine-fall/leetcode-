var singleNumbers = function(nums) {
    let res = 0;
    for (let n of nums) {
        res = res ^ n;
    }
    let idx = 0;
    while (res ^ 1 !== 0) {
        idx++;
        res = res >> 1;
    }
    let r1 = 0;
    let r2 = 0;
    for (let n of nums) {
        if ((n >> idx & 1) === 0) {
            r1 = r1 ^ n;
        } else {
            r2 = r2 ^ n;
        }
    }
    return [r1, r2];
};

var r1 = singleNumbers([1,2,10,4,1,4,3,3]);

console.log(r1);