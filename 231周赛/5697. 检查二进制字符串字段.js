/*
给你一个二进制字符串 s ，该字符串 不含前导零 。

如果 s 最多包含 一个由连续的 '1' 组成的字段 ，返回 true​​​ 。否则，返回 false 。
示例 1：

输入：s = "1001"
输出：false
解释：字符串中的 1 没有形成一个连续字段。
示例 2：

输入：s = "110"
输出：true
 

提示：

1 <= s.length <= 100
s[i]​​​​ 为 '0' 或 '1'
s[0] 为 '1' 

*/

/**
 * @param {string} s
 * @return {boolean}
 */
var checkOnesSegment = function(s) {
    let count = 0;
    // let countOne = 0;
    // for (let char of s) {
    //     if (char === '1') {
    //         countOne++;
    //     }
    // }
    // if (countOne === 1) {
    //     return true;
    // }
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '1') {
            continue;
        }
        count++;
        let j = i + 1;
        while (j < s.length) {
            if (s[j] === '1') {
                j++;
            } else {
                break;
            }
        }
        i = j;
    }
    return count === 1;
};

var r1 = checkOnesSegment("1101");

console.log(r1);
