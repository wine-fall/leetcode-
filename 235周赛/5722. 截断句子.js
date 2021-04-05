/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var truncateSentence = function(s, k) {
    const arr = s.split(' ');
    return arr.slice(0, k).join(' ');
};

var r1 = truncateSentence("What is the solution to this problem", 1);
console.log(r1);