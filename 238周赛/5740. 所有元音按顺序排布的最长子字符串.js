/**
 * @param {string} word
 * @return {number}
 */
var longestBeautifulSubstring = function(word) {
    const dict = {
        a: 1,
        e: 2,
        i: 3,
        o: 4,
        u: 5
    };
    let p1 = 0;
    let p2 = 1;
    let res = [];
    while (p2 < word.length) {
        let curRes = [word[p1]];
        let visited = {};
        visited[word[p1]] = true;
        let last = p1;
        while (dict[word[p2]] >= dict[word[last]]) {
            curRes.push(word[p2]);
            visited[word[p2]] = true;
            last = p2;
            p2++;
        }
        if (Object.keys(visited).length === 5 && curRes.length > res.length) {
            res = [...curRes];
        }
        p1 = p2;
        p2++;
    }
    return res.length;
};

var r1 = longestBeautifulSubstring("a");
console.log(r1);