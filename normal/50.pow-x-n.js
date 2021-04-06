/*
 * @lc app=leetcode.cn id=50 lang=javascript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
	if ( n===0 ) { return 1; }
	if ( n<0 ) { 
		x=1/x;
		n=-n;
	}
	if ( n%2 === 1) {
		return x*myPow(x,n-1)
	}
	return myPow(x*x,n/2)
}
myPow(2,10)
// @lc code=end

