/* description
给你一个字符串 word ，该字符串由数字和小写英文字母组成。

请你用空格替换每个不是数字的字符。例如，"a123bc34d8ef34" 将会变成 " 123  34 8  34" 。注意，剩下的这些整数间至少要用一个空格隔开："123"、"34"、"8" 和 "34" 。

返回对 word 完成替换后形成的 不同 整数的数目。

如果两个整数的 不含前导零 的十进制表示不同，则认为这两个整数也不同。

*/
/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    const map = {};
    for (let i = 0; i < word.length; i++) {
        if (Number.isNaN(Number(word[i]))) {
            continue;
        }
        let num = 0;
        while (!Number.isNaN(Number(word[i]))) {
            num = num * 10 + Number(word[i]);
            i++;
        }
        map[num] ? map[num]++ : map[num] = 1;
    }
    return Object.keys(map).length;
};

var r1 = numDifferentIntegers('a1b01c001');
console.log(r1);