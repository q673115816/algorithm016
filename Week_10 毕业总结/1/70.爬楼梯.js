/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n < 3) return n
    // 递归
    // return climbStairs(n - 1) + climbStairs(n - 2)
    // 记忆化
    // const dp = [0, 1, 2]
    // for (let i = 3; i <= n; i++) {
    //     dp[i] = dp[i - 1] + dp[i - 2]
    // }
    // return dp[n]
    // 状态压缩
    let one = 1
    let two = 2
    for (let i = 3; i <= n; i++) {
        [two, one] = [two + one, two]
    }
    return two
};
// @lc code=end

