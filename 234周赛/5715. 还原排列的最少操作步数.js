/* description
给你一个偶数 n​​​​​​ ，已知存在一个长度为 n 的排列 perm ，其中 perm[i] == i​（下标 从 0 开始 计数）。

一步操作中，你将创建一个新数组 arr ，对于每个 i ：

如果 i % 2 == 0 ，那么 arr[i] = perm[i / 2]
如果 i % 2 == 1 ，那么 arr[i] = perm[n / 2 + (i - 1) / 2]
然后将 arr​​ 赋值​​给 perm 。

要想使 perm 回到排列初始值，至少需要执行多少步操作？返回最小的 非零 操作步数。
*/

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function(n) {
    const perm = Array(n).fill(0).map((item, index) => index);
    let arr;
    let count = 0;
    const changeItem = (lastArr) => {
        const arr = [];
        for (let i = 0; i < lastArr.length; i++) {
            const index = i % 2 === 0
                ? i / 2 | 0
                : n / 2 + ((i - 1) / 2 | 0);
            arr[i] = lastArr[index];
        }
        count++;
        return arr;
    };
    const isEqual = (perm, arr) => {
        for (let i = 0; i < perm.length; i++) {
            if (perm[i] !== arr[i]) {
                return false;
            }
        }
        return true;
    };
    arr = changeItem(perm);
    const dfs = (perm ,arr) => {
        if (isEqual(perm, arr)) {
            return;
        } else {
            arr = changeItem(arr);
            dfs(perm ,arr);
        }
    };
    dfs(perm, arr);
    return count;
};

var r1 = reinitializePermutation(2);
console.log(r1);