/*
 * @lc app=leetcode.cn id=1178 lang=javascript
 *
 * [1178] 猜字谜
 */

// @lc code=start
/**
 * @param {string[]} words
 * @param {string[]} puzzles
 * @return {number[]}
 */

var findNumOfValidWords = function(words, puzzles) {
    const map = {};
    for (let word of words) {
        const n = getBits(word);
        if (!map[n]) {
            map[n] = 1;
        } else {
            map[n]++;
        }
    }
    const res = Array(puzzles.length).fill(0);
    for (let i = 0; i < puzzles.length; i++) {
        const puzzle = puzzles[i];
        const puzzleBit = getBits(puzzle);
        const first = getBits(puzzle[0]);
        let n = puzzleBit;
        while (n > 0) {
            if (((n & first) > 0) && map[n]) {
                res[i] += map[n];
            }
            n = (n - 1) & puzzleBit;
        }
    }
    return res;
};

const getBits = word => {
    const base = 'a'.charCodeAt(0);
    let res = 0;
    for (const char of word) {
        const offSet = char.charCodeAt(0) - base;
        const status = 1 << offSet;
        res = res | status;
    }
    return res;
};

var r1 = findNumOfValidWords(["aaaa","asas","able","ability","actt","actor","access"],
["aboveyz","abrodyz","abslute","absoryz","actresz","gaswxyz"]);
console.log(r1);

// @lc code=end

