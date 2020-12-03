/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    const hash = Array(n).fill(true)
    let count = 0
    for (let i = 2; i ** 2 < n; i++) {
        if (hash[i]) {
            for (let j = i ** 2; j < n; j += i) {
                hash[j] = false// 排除约数
            }
        }
    }
    for (let i = 2; i < n; i++) {
        if (hash[i]) count++
    }
    return count
};
// @lc code=end

