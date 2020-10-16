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
    if (n < 0) {
        n = -n
        x = 1 / x
    }
    let result = 1
    while (n) {
        if (n % 2) result *= x
        x *= x
        n = n >>> 1
    }
    return result
};
// var myPow = function (x, n) {
//     if (n === 0) return 1
//     if (n === 1) return x
//     if (n < 0) {
//         n = -n
//         x = 1 / x
//     }
//     return n % 2 === 0 ? myPow(x * x, n >>> 1) : x * myPow(x * x, n >>> 1)
// };
// @lc code=end

