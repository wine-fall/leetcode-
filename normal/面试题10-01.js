/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
var merge = function(A, m, B, n) {
  let point1 = m-1, point2 = n-1, curPoint = m+n-1
  while (B[point2] && A[point1]) {
    if (A[point1] < B[point2]) {
      A[curPoint] = B[point2]
      curPoint--
      point2--
    } else {
      A[curPoint] = A[point1]
      curPoint--
      point1--
    }
  }
  if (point2 !== 0) {
    let temp = B.slice(0,point2+1)
    A.splice(point1,0,temp)
  }
  return A
};
merge([1,2,3,0,0,0],3,[2,5,6],3)
