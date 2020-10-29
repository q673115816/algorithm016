/*
 * @lc app=leetcode.cn id=221 lang=javascript
 *
 * [221] 最大正方形
 */

// @lc code=start
/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (!matrix.length || !matrix[0].length) return 0
    let max = 0
    let n = matrix.length
    let m = matrix[0].length
    let dp = Array.from({ length: n }, () => [])
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === '1') {
                if (!i || !j) {
                    dp[i][j] = 1
                } else {
                    dp[i][j] = Math.min(Math.min(dp[i - 1][j], dp[i][j - 1]), dp[i - 1][j - 1]) + 1
                }
                max = Math.max(max, dp[i][j])
            } else {
                dp[i][j] = 0
            }
        }
    }
    return max * max
};
// @lc code=end

