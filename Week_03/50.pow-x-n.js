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
// from winter
var myPow = function (x, n) {
    var r = 1
    var v = x
    var flag = n > 0
    n = Math.abs(n)
    while (n) {
        if (n % 2 == 1) {
            r *= v
            n -= 1
        }
        v = v * v
        n = n / 2
    }
    return flag ? r : 1 / r
};
// @lc code=end

