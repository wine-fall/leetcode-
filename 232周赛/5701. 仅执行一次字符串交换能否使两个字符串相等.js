/*
给你长度相等的两个字符串 s1 和 s2 。一次 字符串交换 操作的步骤如下：选出某个字符串中的两个下标（不必不同），并交换这两个下标所对应的字符。
如果对 其中一个字符串 执行 最多一次字符串交换 就可以使两个字符串相等，返回 true ；否则，返回 false 。
*/

/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    const map1 = {};
    const map2 = {};
    for (let i = 0; i < s1.length; i++) {
        const char = s1[i];
        map1[char] ? map1[char].push(i) : map1[char] = [i];
    }
    for (let i = 0; i < s2.length; i++) {
        const char = s2[i];
        map2[char] ? map2[char].push(i) : map2[char] = [i];
    }
    let count = 0;
    for (let key in map1) {
        if (!map2[key]) {
            return false;
        }
        for (let j = 0; j < map1[key].length; j++) {
            const curIndex = map1[key][j];
            if (!map2[key].includes(curIndex)) {
                count++;
            }
        }
    }
    return count <= 2;
};

var r1 = areAlmostEqual("ab", "cd");
console.log(r1);