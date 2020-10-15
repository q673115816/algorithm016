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
var myPow = function (x, n) {
    if (n === 0) return 1
    if (n === 1) return x
    if (n < 0) {
        x = 1 / x
        n = n * -1
    }

    return n % 2 === 0 ? myPow(x * x, n >>> 1) : x * myPow(x * x, n >>> 1)
};
// var myPow = function (x, n) {
//     let result = 1
//     if (n < 0) {
//         x = 1 / x
//         n = n * -1
//     }
//     let pow = x
//     while (n) {
//         if (n % 2 === 1) result *= pow
//         pow *= pow
//         n = n >>> 1
//     }
//     return result
// };
// @lc code=end

