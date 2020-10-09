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
// 光头哥 loop
var myPow = function (x, n) {
    if (n < 0) {
        x = 1 / x
        n = -n
    }
    let result = 1
    while (n) {
        if (n % 2) result *= x
        x *= x
        n = n >>> 1 // 为什么要仨箭头
    }
    return result
};
// 光头哥 递归
// var myPow = function (x, n) {
//     if (n === 0) return 1
//     if (n < 0) return 1 / myPow(x, -n)
//     if (n % 2) return x * myPow(x, n - 1)
//     return myPow(x * x, n / 2)
// };
// @lc code=end

