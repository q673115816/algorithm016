/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
// 矩阵
var fib = function (N) {
    return N <= 0 ? 0 :
        matrix22_mul([[0, 1], [0, 0]], matrix22_pow([[0, 1], [1, 1]], N - 1))[0][1]
};

let matrix22_mul = (x, y) =>
    [
        [x[0][0] * y[0][0] + x[0][1] * y[1][0], x[0][0] * y[0][1] + x[0][1] * y[1][1]],
        [x[1][0] * y[0][0] + x[1][1] * y[1][0], x[1][0] * y[0][1] + x[1][1] * y[1][1]]
    ]

let matrix22_pow = (x, n) => {
    var r = [[1, 0], [0, 1]]
    var v = x
    while (n) {
        if (n % 2 == 1) {
            r = matrix22_mul(r, v)
            n -= 1
        }
        v = matrix22_mul(v, v)
        n = n / 2
    }
    return r
}
// 线性代数
// var fib = function(N) {
//     return (Math.pow((1 + Math.sqrt(5))/2, N) - Math.pow((1 - Math.sqrt(5)) / 2, N)) / Math.sqrt(5)
// };
// @lc code=end

