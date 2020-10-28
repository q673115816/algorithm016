/*
 * @lc app=leetcode.cn id=64 lang=javascript
 *
 * [64] 最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    let n = grid.length
    let m = grid[0].length
    if (n === 0 || m === 0) return 0
    for (let i = 1; i < m; i++) {
        grid[0][i] += grid[0][i - 1]
    }
    for (let i = 1; i < n; i++) {
        grid[i][0] += grid[i - 1][0]
        for (let j = 1; j < m; j++) {
            grid[i][j] += Math.min(grid[i - 1][j], grid[i][j - 1])
        }
    }
    return grid[n - 1][m - 1]
};
// 单行
// var minPathSum = function (grid) {
//     let n = grid.length
//     let m = grid[0].length
//     if (n === 0 || m === 0) return 0
//     let dp = [grid[0][0]]
//     for (let i = 1; i < m; i++) {
//         dp[i] = dp[i - 1] + grid[0][i]
//     }
//     for (let i = 1; i < n; i++) {
//         dp[0] += grid[i][0]
//         for (let j = 1; j < m; j++) {
//             dp[j] = grid[i][j] + Math.min(dp[j - 1], dp[j])
//         }
//     }
//     return dp[m - 1]
// };
// 标准
// var minPathSum = function (grid) {
//     let n = grid.length
//     let m = grid[0].length
//     if (n === 0 || m === 0) return 0
//     let dp = Array.from({ length: n }, () => [])
//     dp[0][0] = grid[0][0]
//     for (let i = 1; i < n; i++) {
//         dp[i][0] = grid[i][0] + dp[i - 1][0]
//     }
//     for (let i = 1; i < m; i++) {
//         dp[0][i] = grid[0][i] + dp[0][i - 1]
//     }
//     for (let row = 1; row < n; row++) {
//         for (let col = 1; col < m; col++) {
//             dp[row][col] = grid[row][col] + Math.min(dp[row][col - 1], dp[row - 1][col])
//         }
//     }
//     return dp[n - 1][m - 1]
// };
// @lc code=end

